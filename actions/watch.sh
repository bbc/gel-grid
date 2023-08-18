#!/bin/sh

# Ensure abort if any command fails (returns non zero status code $?)
set -e +x

# Extract the tag/release number
echo "VERSION=${GIT_BRANCH##*/v}" >> build/jenkins.properties

# Source the properties file
. build/jenkins.properties
