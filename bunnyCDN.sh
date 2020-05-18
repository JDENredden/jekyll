#!/usr/bin/env bash

curl --include \
     --request POST \
     --header "Content-Type: application/xml" \
     --header "Accept: application/json" \
     --header "AccessKey: $1" \
     --header "Content-Length: 0" \
     'https://bunnycdn.com/api/pullzone/$2/purgeCache'