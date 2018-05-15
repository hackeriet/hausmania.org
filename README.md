# Setup
## systemd

The web-site is updated automatically using systemd services and timers.
See `.deployment` dir for information. All services and timers **except**
the Facebook event updater should be enabled.

Facebook events can not currently be fetched from the Facebook API due to
some policy changes and a move towards "Facebook Local". Maybe this changes
in the future.

## Developing

```
pacman -S ruby
gem install bundler
bundle install
bundle exec jekyll serve
```

To update bower dependency of bootstrap, install bower-cli and run bower install bootstrap

# Updating production

This should happen automatically by the `haus-repo-update.service`, but can
also manually be triggered by:

```
$ ssh rediger.hausmania.org
# systemctl start haus-repo-update.service
# systemctl start haus-jekyll-build.service
```

