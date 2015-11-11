var build = require('vgr-build-base');
var gulp = require('gulp');
var fileinclude = require('gulp-file-include');

build.config.shared.browsersync = true;

build.config.watch.targets.push('styleguide');
build.config.build.compiled.push('styleguide');

build.config.styleguide = {
	dir: 'html',

	src: [ '**/*.html' ],

	watch: '**/*.html',

	dest: ''
};

gulp.task('styleguide', function() {
	return build.utils.srcFor('styleguide')
		.pipe(fileinclude('@@'))
		.pipe(build.utils.destFor('styleguide'));
});
