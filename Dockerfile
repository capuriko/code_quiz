FROM node:13.5.0-alpine

WORKDIR /work

RUN apk update && \
    npm install -g npm @vue/cli && \
    npm install -g @vue/cli-init && \
    npm install -g @vue/cli-service && \
    npm install -g vue-template-compiler && \
    npm install -g firebase-tools

ADD ./firebase/code_quiz ./
RUN npm install

#RUN yes | vue add vuetify

CMD ["npm","run","serve"]