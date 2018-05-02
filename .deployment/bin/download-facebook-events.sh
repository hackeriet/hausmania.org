#!/bin/bash
#
# Download events for a Facebook page and output to file
#

set -x
set -euo pipefail

access_token="$(head -n 1 < $ACCESS_TOKEN_FILE)"
dest=$1

curl -sSfo "$dest.tmp" "https://graph.facebook.com/v2.8/hausmania/events/?access_token=${access_token}"
json_pp -json_opt utf8,pretty -f json -t json < $dest.tmp > /dev/null

# If successful, copy to target destination
cp $dest.tmp $dest
