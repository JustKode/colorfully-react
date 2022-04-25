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
    'adjective': fields.String(description="형용사", required=True, example="warm", enum=list(enum_util.get_adjectives())),
    'schema': fields.List(fields.String(enum=list(enum_util.get_color_type_dict())))
})

@Init.route('/register')
class Register(Resource):
    @Init.expect(init_fields)
    @Init.doc(responses={201: "스키마 생성 성공"})
    def post(self):
        """스키마를 생성 합니다."""
        result = set_schema(request.json)
        return result