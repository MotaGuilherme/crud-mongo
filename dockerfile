FROM node:latest

RUN mkdir -p /src
WORKDIR /src
COPY package.json /src
RUN npm install
COPY . /src
