FROM node

RUN apt-get update && npm i -g npm

USER node

WORKDIR /src
