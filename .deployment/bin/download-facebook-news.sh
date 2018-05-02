#!/bin/bash
#
# Download events for a Facebook page and output to file
#

set -x
set -euo pipefail

access_token="$(head -n 1 < $ACCESS_TOKEN_FILE)"
dest=$1

curl -sSfo "$dest.tmp" "https://graph.facebook.com/v2.10/hausmania/posts?fields=created_time%2Cdescription%2Cfrom%2Clink%2Cmessage%2Cname%2Cpermalink_url%2Cstatus_type%2Ctype%2Cpicture%2Cfull_picture&limit=10&access_token=$access_token"
json_pp -json_opt utf8,pretty -f json -t json < $dest.tmp > /dev/null

# If successful, copy to target destination
cp $dest.tmp $dest
