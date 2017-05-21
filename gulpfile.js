/**
 * Created by zhaoyu on 17-1-18.
 */

var gulp = require('gulp');

gulp.task('build', function() {
    gulp.src("./node_modules/bootstrap/dist/**")
        .pipe(gulp.dest("./dist/libs/bootstrap"));

    gulp.src("./node_modules/jquery/dist/**")
        .pipe(gulp.dest("./dist/libs/jquery"));

    gulp.src("./src/style/**")
        .pipe(gulp.dest("./dist/style"));

    gulp.src("./libs/**")
        .pipe(gulp.dest("./dist/libs"));

    gulp.src("./src/index.html")
        .pipe(gulp.dest("./dist/"));

    gulp.src("./src/data/**")
        .pipe(gulp.dest("./dist/data"));
    gulp.src("./src/favicon.png")
        .pipe(gulp.dest("./dist"));
});