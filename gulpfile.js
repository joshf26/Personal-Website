const { task, watch, parallel, src, dest } = require('gulp');
const { compile } = require('gulp-nunjucks');
const { exclude } = require('gulp-ignore');
const minify = require('gulp-minify');

task('copy', () => {
  return src(['src/**', '!src/templates/**', '!src/js/**']).pipe(dest('dist'));
});

task('build_html', () => {
  return src(['src/templates/**', '!src/templates/base.html']).pipe(compile()).pipe(dest('dist'));
});

task('build_js', () => {
  return src('src/js/**').pipe(minify({
    ext: {
      src: '-ignore.js',
      min: '.js'
    }
  })).pipe(exclude('**-ignore.js')).pipe(dest('dist/js'));
});

task('default', parallel('copy', 'build_html', 'build_js'));

task('watch', function() {
  watch('src/**', parallel('copy', 'build_html', 'build_js'));
});
