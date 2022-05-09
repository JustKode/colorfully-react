FROM node:16

RUN mkdir /frontend
WORKDIR /frontend

ADD package*.json /frontend/
RUN yarn install --production=true
ADD . /frontend/

EXPOSE 3000