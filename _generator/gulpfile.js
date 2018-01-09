var gulp        = require('gulp');

var Verbose = require('./Verbose');
var Crawler = require('./Crawler');
var Transform = require('./Transform');
var formatJson = require('format-json-pretty');
var fs = require('fs');

gulp.task('default', function () {

  var files = [
    '../components/base/colors/_colors.scss',
   ];

  var styles = [];
  for(var f in files) {
    var file = files[f];
    Verbose.spin('Crawling ' + file);
    var style = Crawler.processFile(file);
    styles = styles.concat(style);
  }


  var styleguides = Transform.forView(styles);

  var jsonObject = {
    "context": styleguides
  };

  //console.log(stringifyObject(styleguides));
  fs.writeFileSync('../components/base/colors/colors.config.json', formatJson(jsonObject));
  Verbose.finished();
});
