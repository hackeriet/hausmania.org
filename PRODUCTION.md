# Production server tasks
## Cron jobs

This is the main cronjob for hausmania.org. It is assumed the username of the
main user for this solution is `haus`

```
# /etc/cron.d/hausmania-org
#
# hausmania.org website service jobs
#
SHELL=/bin/sh
PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin

# Get a fresh access token every two hours
* */2 * * * haus curl -s 'https://graph.facebook.com/oauth/access_token?client_id=<APP_ID>&client_secret=<APP_SECRET>&grant_type=client_credentials' | cut -d\" -f 4 > ~/facebook-access-token.txt

# Update event feed every minute
*/1 * * * * haus curl -sSfo ~/facebook-events.json "https://graph.facebook.com/v2.8/hausmania/events/?access_token=$(head -n 1 < ~haus/facebook-access-token.txt)" && bundle exec jekyll build
```
