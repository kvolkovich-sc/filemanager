#!/bin/sh

docker run --rm -it -p 80:80 --mount type=bind,source="$(pwd)",target=/var/app-data ockvolkovich/filemanager-server:1.0.4
