#!/bin/sh

VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

# Install dependencies using "Lerna" and build static resources
(cd ../.. && yarn) && \
npm run gh-pages:build && \

docker build \
       --no-cache \
       --build-arg VERSION=$VERSION \
       --build-arg VCS_REF=`git rev-parse --short HEAD` \
       --build-arg BUILD_DATE=`date -u +"%Y-%m-%dT%H:%M:%SZ"` \
       -t ockvolkovich/filemanager-client-react-showroom:$VERSION .
