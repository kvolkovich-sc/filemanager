#!/bin/sh

# Install dependencies using "Lerna"
cd ../.. && yarn && cd - && ./docker-build.sh && npm run gh-pages:build && \

VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

docker build \
       --no-cache \
       --build-arg VERSION=$VERSION \
       --build-arg VCS_REF=`git rev-parse --short HEAD` \
       --build-arg BUILD_DATE=`date -u +"%Y-%m-%dT%H:%M:%SZ"` \
       -t ockvolkovich/filemanager-client-react-showroom:latest .
