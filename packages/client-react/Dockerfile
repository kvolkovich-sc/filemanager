FROM node:8-alpine

ARG BUILD_DATE
ARG VCS_REF
ARG VERSION

LABEL maintainer="kirill.volkovich@opuscapita.com" \
      org.label-schema.name="filemanager-client-react-showroom" \
      org.label-schema.build-date=$BUILD_DATE \
      org.label-schema.vcs-url="https://github.com/OpusCapita/filemanager" \
      org.label-schema.vcs-ref=$VCS_REF \
      org.label-schema.vendor="OpusCapita Group Oy" \
      org.label-schema.version=$VERSION \
      org.label-schema.schema-version="1.0" \
      org.label-schema.docker.cmd='docker run --rm -it -p 80:80 --mount type=bind,source="$(pwd)",target=/var/app-data ockvolkovich/filemanager-client-react-showroom'

ENV HOST 0.0.0.0

WORKDIR /app

COPY ./.gh-pages-tmp /app
COPY ./.env.js /app

RUN cd /app && \
    mkdir ./static && \
    npm install -g http-server@0.11.1 && \
    echo "node -e \"console.log('window.env = ' + JSON.stringify(require('./.env.js')) + ';')\" > env.js && http-server -p 80 -g" > start.sh

EXPOSE 80

CMD ["sh", "start.sh"]
