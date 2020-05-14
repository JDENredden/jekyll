#!/usr/bin/env bash

curl --include \
     --request POST \
     --header "Content-Type: application/xml" \
     --header "Accept: application/json" \
#     --header "AccessKey: 3aa7bf31-dd7e-41fa-9c99-c1198e7cf332c9e030b0-ed6c-4e18-bf92-323f64103c96" \
     --header "AccessKey: $0"
     --header "Content-Length: 0" \
     'https://bunnycdn.com/api/pullzone/132574/purgeCache'