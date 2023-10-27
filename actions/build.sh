#!/bin/sh

# Ensure abort if any command fails (returns non zero status code $?)
set -e +x

# Install dependencies, build and verify tests
npm i
npm run build
npm test
