rm -r ./static
cp -R ../we-tomatoes/dist/* ./

git add .
git commit -m 'Release.'
git push
