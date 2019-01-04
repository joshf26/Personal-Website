const { task, watch, series, src, dest } = require('gulp');

task('build', function () {
    return src('src/**').pipe(dest('dist'));
});

task('watch', function() {
  watch('src/**', series('build'));
});
