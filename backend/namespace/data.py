from flask import request
from flask_restx import Resource, Namespace, fields
from json import dumps
from requests import post
from util.mongo import set_schema, get_schema
from util.enum import EnumUtil
from random import randint, choice

enum_util = EnumUtil()

Data = Namespace(
    name="Data",
    description="Data 삽입 관련 메서드들이 있습니다."
)

color_data_fields = Data.model('Random Color Data', {
    "mainBackGroup": fields.String(description="배경색", example="#123456"),
    "mainGroup": fields.String(description="메인색", example="#123456"),
    "subGroup": fields.String(description="보조색", example="#123456"),
    "point": fields.String(description="강조색", example="#123456")
})

@Data.route('/<string:page_id>')
@Data.doc(params={'page_id': 'Page Initialize시 반환 받은 ID 입니다.'})
class Color(Resource):
    @Data.response(200, "반환 성공", color_data_fields)
    @Data.response(404, "아이디 조회 실패")
    def get(self, page_id):
        schema = get_schema(page_id)

        if schema is None:
            return {"message": "page not found"}, 404
        
        schema = schema['adjective']
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
            "point": response[4]
        }

        return result