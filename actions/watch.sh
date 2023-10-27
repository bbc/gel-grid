#!/bin/sh

# Ensure abort if any command fails (returns non zero status code $?)
set -e +x

# Extract the tag/release number
echo "VERSION=${GIT_BRANCH##*/}" >> actions/jenkins.properties

# Source the properties file
. actions/jenkins.properties
