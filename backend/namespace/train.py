from flask import request
from flask_restx import Resource, Namespace, fields
from json import loads
from requests import post
from .data import color_data_fields
from util.mongo import get_schema, post_data, get_data
from util.train import train_data
from util.enum import EnumUtil

enum_util = EnumUtil()

Train = Namespace(
    name="Train",
    description="학습을 수행 합니다."
)

result_fields = Train.model("학습 결과", {key: fields.List(fields.Nested(color_data_fields)) for key in enum_util.get_adjectives()})

@Train.route('/<string:group_id>')
@Train.doc(params={'group_id': 'group_adjective.json에 명시한 Group ID 입니다.'})
class TrainPage(Resource):
    @Train.response(200, "반환 성공", result_fields)
    @Train.response(404, "아이디 조회 실패")
    def get(self, group_id):
        """현재까지의 데이터로 학습한 결과를 반환 합니다."""
        with open('./group_adjective.json', 'r') as f:
            groups = loads(f.read())

        if group_id not in groups:
            return {"message": "group not found"}, 404
        else:
            return train_data(get_data(group_id)), 200