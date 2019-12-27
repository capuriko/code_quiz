FROM node:13.5.0-alpine

ADD ./firebase /work
WORKDIR /work

RUN apk update && \
    npm install -g npm @vue/cli
    npm install -g @vue/cli-init
