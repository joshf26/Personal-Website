const { task, watch, series, parallel, src, dest } = require('gulp');
const { compile } = require('gulp-nunjucks');

task('copy', () => {
  return src(['src/**', '!src/templates/**']).pipe(dest('dist'));
});

task('build', () => {
  return src(['src/templates/**', '!src/templates/base.html']).pipe(compile()).pipe(dest('dist'));
});

task('default', parallel('copy', 'build'));

task('watch', function() {
  watch('src/**', parallel('copy', 'build'));
});
