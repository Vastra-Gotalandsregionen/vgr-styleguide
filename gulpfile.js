var build = require('vgr-build-base');
var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

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
	nunjucksRender.nunjucks.configure(['src/html/']);

	return build.utils.srcFor('styleguide')
		.pipe(nunjucksRender())
		.pipe(build.utils.destFor('styleguide'));
});
