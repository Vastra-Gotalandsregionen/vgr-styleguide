var build = require('vgr-build-base');

build.config.static.src.push('html/**/*.html');

build.config.shared.browsersync = true;
