#!/bin/sh

# Ensure abort if any command fails (returns non zero status code $?)
set -e +x

BASEDIR=$(dirname $(dirname $(readlink -f "$0")))

# Create .npmrc to ensure NPM uses the token
echo '//registry.npmjs.org/:_authToken=${NPM_TOKEN}' >> $BASEDIR/.npmrc

# Publish the package using the token for authenication
npm publish

# Remove the npmrc file as action completed
rm $BASEDIR/.npmrc
