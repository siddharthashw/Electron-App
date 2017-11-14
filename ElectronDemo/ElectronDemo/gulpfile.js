var gulp = require("gulp");
var typescript = require('gulp-tsc');

gulp.task('compile', function () {
    gulp.src(['index.ts'])
        .pipe(typescript())
        .pipe(gulp.dest('dist/'))
});