from flask import Flask
from flask_cors import CORS
from flask_restx import Api
from namespace.init import Init
from namespace.data import Data

app = Flask(__name__)
CORS(app)

api = Api(
    app,
    version='0.1',
    title="Colorfully React API Server",
    description="Colorfully React API Server",
    terms_url="/",
    contact="sobu0715@gmail.com",
    license="MIT"
)

api.add_namespace(Init, '/init')
api.add_namespace(Data, '/data')

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=8000)