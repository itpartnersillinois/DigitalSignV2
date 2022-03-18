var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var terser = require('gulp-terser');
var sass = require('gulp-dart-sass');
var mergeseries = require('stream-series');

gulp.task("styles", function () {
    return gulp.src(['_sass/*.scss'])
        .pipe(sass())
        .pipe(cssmin())
        .pipe(concat("site.css"))
        .pipe(gulp.dest("style/"));
});

gulp.task("lobby-script", function () {
    var customJs = gulp.src(['_scripts/slides.js', '_scripts/lobby.js', '_scripts/emergency.js', '_scripts/twitter.js', '_scripts/weather.js', '_scripts/calendar.js']);
    return mergeseries(customJs)
        .pipe(concat('lobby.min.js'))
        .pipe(gulp.dest('script'));
});

gulp.task("simple-script", function () {
    var customJs = gulp.src(['_scripts/slides.js', '_scripts/emergency.js', '_scripts/weather.js', '_scripts/calendar.js']);
    return mergeseries(customJs)
        .pipe(concat('simple.min.js'))
        .pipe(gulp.dest('script'));
});

gulp.task("default", gulp.series("styles", "simple-script", "lobby-script"));