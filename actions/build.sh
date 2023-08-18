#!/bin/sh

# Ensure abort if any command fails (returns non zero status code $?)
set -e +x

# Install the dependencies
npm i

# Create assets
npm run build
