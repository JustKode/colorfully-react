from flask import request
from flask_restx import Resource, Api, Namespace, fields
from util.mongo import set_schema
from util.enum import EnumUtil

enum_util = EnumUtil()

Init = Namespace(
    name="Init",
    description="초기화 관련 메서드들이 있습니다."
)

init_fields = Init.model('Initialize Schema', {
    'adjective_pair': fields.String(description="형용사 쌍", required=True, example="warm-cool", enum=list(enum_util.get_adjective_pairs()))
})

@Init.route('/register')
class Register(Resource):
    @Init.expect(init_fields)
    @Init.doc(responses={201: "스키마 생성 성공"})
    def post(self):
        """스키마를 생성 합니다."""
        result = set_schema(request.json)
        return result