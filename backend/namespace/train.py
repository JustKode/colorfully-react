from flask import request
from flask_restx import Resource, Namespace, fields
from json import dumps
from requests import post
from .data import color_data_fields
from util.mongo import get_schema, post_data
from util.enum import EnumUtil

Train = Namespace(
    name="Train",
    description="학습을 수행 합니다."
)

@Train.route('/<string:page_id>')
@Train.doc(params={'page_id': 'Page Initialize시 반환 받은 ID 입니다.'})
class TrainPage(Resource):
    @Train.response(200, "반환 성공", color_data_fields)
    @Train.response(404, "아이디 조회 실패")
    def get(self, page_id):
        """현재까지의 데이터로 학습한 결과를 반환 합니다."""
        schema = get_schema(page_id)

        if schema is None:
            return {"message": "page not found"}, 404
        else:
            return {
                "mainBackGroup": "#123456",
                "mainGroup": "#123456",
                "subGroup": "#123456",
                "point": "#123456"
            }
