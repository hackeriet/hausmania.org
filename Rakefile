
task :test do
  require 'html-proofer'
  sh "bundle exec jekyll build"
  options = { :assume_extension => true }
  HTMLProofer.check_directory("./_site", options).run
end

task :deploy do
  sh "ssh haus@rediger.hausmania.org git --git-dir=/srv/hausmania.org/.git pull"
end
