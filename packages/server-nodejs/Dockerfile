ARG BUILD_DATE
ARG VCS_REF
ARG VERSION

FROM node:9-alpine

LABEL maintainer="kirill.volkovich@opuscapita.com" \
      org.label-schema.name="filemanager-server-nodejs" \
      org.label-schema.build-date=$BUILD_DATE \
      org.label-schema.vcs-url="https://github.com/OpusCapita/filemanager" \
      org.label-schema.vcs-ref=$VCS_REF \
      org.label-schema.vendor="OpusCapita Group Oy" \
      org.label-schema.version=$VERSION \
      org.label-schema.schema-version="1.0" \
      org.label-schema.docker.cmd='docker run --rm -it -p 80:80 --mount type=bind,source="$(pwd)",target=/var/app-data ockvolkovich/filemanager-server'

ENV PORT 80
ENV HOST 0.0.0.0
ENV OPUSCAPITA_FILEMANAGER_FS_ROOT "/var/app-data"
ENV OPUSCAPITA_FILEMANAGER_READONLY "true"

WORKDIR /app

COPY . /app

RUN cd /app && \
    npm install && \
    npm run build-api-docs && mkdir -p ./static/api && cp -r api-docs.tmp/docs ./static/api && \
    npm prune --production && \
    mkdir /var/app-data

VOLUME /var/app-data

EXPOSE 80

CMD ["npm", "start"]
