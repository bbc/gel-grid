#!/bin/bash

set -o errexit -o nounset

if [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi

git clone https://$GH_TOKEN@github.com/bbc/gel-grid.css.git
git config --global user.name "Travis CI"
git config --global user.email "$EMAIL"

npm run dist
mv dist/gel-grid.css gel-grid.css/gel-grid.css
mv dist/gel-grid.min.css gel-grid.css/gel-grid.min.css

cd gel-grid.css
git add -A .
git commit -m "Built dist from bbc/gel-grid $TRAVIS_COMMIT"
git push -q https://$GH_TOKEN@github.com/bbc/gel-grid.css.git master
