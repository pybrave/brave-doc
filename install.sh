yarn build 
git checkout doc
rm -rf 404.html  assets  blog  docs  img  index.html  markdown-page  sitemap.xml
mv build/* .
git add .
git commit  -m 'update'
git push origin doc
git checkout master
git push origin master