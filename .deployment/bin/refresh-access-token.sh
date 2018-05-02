#!/bin/bash
#
# Get a new Facebook API token and write it to file
#
# Expects environment APP_ID and APP_SECRET to be set.
# Those values can be found in the Facebook dev center.
#
# First argument is the path to the file in which to store the token.
# Example: APP_ID=123456 APP_SECRET=abcdef ./refresh-access-token.sh /tmp/fbtoken

set -x
set -euo pipefail

ACCESS_TOKEN_FILE="$1"

curl -sSf "https://graph.facebook.com/oauth/access_token?client_id=${APP_ID}&client_secret=${APP_SECRET}&grant_type=client_credentials" | cut -d\" -f 4 > $ACCESS_TOKEN_FILE
echo "Got a new access token"
