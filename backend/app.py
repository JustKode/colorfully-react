from flask import Flask
from flask_restx import Api, Resource

app = Flask(__name__)
api = Api(app)


@api.route('/hello')
class HelloWorld(Resource):
    def get(self):
        return {"hello": "world!"}

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=80)