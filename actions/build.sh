#!/bin/sh

# Ensure abort if any command fails (returns non zero status code $?)
set -e +x

# Install the dependencies and ensure tests pass
npm i
npm test
