var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    ngAnnotate = require('gulp-ng-annotate'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat');

var paths = {
    js: [
        'src/angular-http-creator.js'
    ]
};

gulp.task('default', ['watch']);

gulp.task('build', ['js']);

gulp.task('js', function() {
    return gulp.src(paths.js)
        .pipe(gulp.dest('./'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('./'))
        .on('error', gutil.log);
});

gulp.task('watch', ['build'], function() {
    gulp.watch(paths.js, ['js']);
});
