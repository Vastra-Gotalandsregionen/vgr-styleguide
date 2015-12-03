#!/usr/bin/env bash

echo "Copying to temporary repository"
tmpdir=`mktemp -d 2>/dev/null || mktemp -d -t 'vgr-styleguide'`
cp -R "build/." "$tmpdir"
cd "$tmpdir"
git init
git add .
git commit -m "Site updated via build script"
git remote add origin git@github.com:Vastra-Gotalandsregionen/vgr-styleguide.git
echo "Pushing to Github"
git push origin master:refs/heads/gh-pages --force
