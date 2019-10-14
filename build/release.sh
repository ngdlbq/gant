#!usr/bin/env bash

rm -rf ./lib
rm -rf ./dist

npx cross-env NODE_ENV=production webpack --hide-modules --config build/build-lib.js
node build/get-entry.js
npx cross-env NODE_ENV=production webpack --hide-modules --config build/build-entry.js
