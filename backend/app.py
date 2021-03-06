from flask import Flask
from flask_cors import CORS
from flask_restx import Api
from namespace.data import Data
from namespace.train import Train

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

api.add_namespace(Data, '/data')
api.add_namespace(Train, '/train')

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=8000)