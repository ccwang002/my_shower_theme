#!/usr/bin/env bash

mkdir -p bundled/lib
rsync -a \
    styles fonts fonts pictures \
    .gitattributes .gitignore \
    .editorconfig .stylelintrc \
    LICENSE.md README.md \
    bundled/

rsync -a node_modules/@shower/core/dist/ bundled/lib/shower
rsync -a node_modules/@highlightjs/cdn-assets/ bundled/lib/highlightjs
rsync -a node_modules/katex/dist/ bundled/lib/katex
sed -f scripts/fix_npm_pkg_paths.sed index.html > bundled/index.html
