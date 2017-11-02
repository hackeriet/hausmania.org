# Setup

- Get an API token here: https://developers.facebook.com/tools/explorer/145634995501895/
- See [PRODUCTION.md](/PRODUCTION.md) for server setup steps related to running the website

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
