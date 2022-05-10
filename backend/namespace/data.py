from flask import request
from flask_restx import Resource, Namespace, fields
from json import dumps, loads
from requests import post
from util.mongo import post_data
from util.enum import EnumUtil
from random import randint, choice

enum_util = EnumUtil()

Data = Namespace(
    name="Data",
    description="Data 삽입 관련 메서드들이 있습니다."
)

color_data_fields = Data.model('Random Color Data', {
    "mainBackGroup": fields.List(fields.Integer, description="배경색 RGB", example=[123, 123, 123]),
    "mainGroup": fields.List(fields.Integer, description="메인색 RGB", example=[123, 123, 123]),
    "subGroup": fields.List(fields.Integer, description="보조색 RGB", example=[123, 123, 123]),
    "pointGroup": fields.List(fields.Integer, description="강조색 RGB", example=[123, 123, 123])
})

input_data = {key: fields.Float(description="-1.0 ~ 1.0의 유저 응답 점수 입력", example=0.0) for key in enum_util.get_adjective_pairs()}
input_data["inputData"] = fields.Nested(color_data_fields)

input_data_fields = Data.model('학습 데이터 모델', input_data)

@Data.route('/<string:group_id>')
@Data.doc(params={'group_id': 'group_adjective.json에 명시한 Group ID 입니다.'})
class Color(Resource):
    @Data.response(200, "반환 성공", color_data_fields)
    @Data.response(404, "아이디 조회 실패")
    def get(self, group_id):
        """랜덤 색상을 가져 옵니다."""
        with open('./group_adjective.json', 'r') as f:
            groups = loads(f.read())

        if group_id not in groups:
            return {"message": "group not found"}, 404
        
        schema = groups[group_id]
        schema = choice(schema.split('-'))
        color_list = enum_util.get_colors_by_adjective(schema)

        if color_list is None:
            return {"message": "schema deprecated"}, 500
        
        color = choice(color_list)
        color = list(map(lambda x: min(255, max(0, x + randint(-10, 10))), color))

        color_data = {
            "input": ["N", "N", color, color, "N"],
            "model": "ui"
        }

        response = post("http://colormind.io/api/", data=dumps(color_data), headers={'Content-Type': 'application/octet-stream'})

        if response.status_code != 200:
            return {"message": "colormind server error"}, 500
        
        response = response.json().get('result')

        result = {
            "mainBackGroup": response[0],
            "mainGroup": response[2],
            "subGroup": response[1],
            "pointGroup": response[4]
        }

        return result
    

    @Data.response(201, "생성 성공")
    @Data.response(404, "아이디 조회 실패")
    @Data.expect(input_data_fields)
    def post(self, group_id):
        """색상 정보와 유저 응답 정보를 응답합니다."""
        with open('./group_adjective.json', 'r') as f:
            groups = loads(f.read())

        if group_id not in groups:
            return {"message": "group not found"}, 404
        
        data = request.json
        data['group'] = group_id

        post_data(data)

        return {"message": "success"}, 201