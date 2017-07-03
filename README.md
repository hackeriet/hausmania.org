# Setup
## Cron
curl "https://graph.facebook.com/v2.8/hausmania/events/?access_token=SECRET" -o _data/facebook.json
Get a token here: https://developers.facebook.com/tools/explorer/145634995501895/

## Developing

```
pacman -S ruby
gem install bundler
bundle install
bundle exec jekyll serve
```

To update bower dependency of bootstrap, install bower-cli and run bower install bootstrap

# Updating production

```
ssh rediger.hausmania.org
cd /srv/hausmania.org ; sudo -u haus git pull
(maybe) systemctl restart haus 
```

