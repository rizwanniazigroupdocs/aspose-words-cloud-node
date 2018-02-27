var gulp = require('gulp');
var ts = require('gulp-typescript');
var cucumber = require('gulp-cucumber');
var del = require('del');

var buildConfig = {
    targetPath: 'dist',
    isProduction: true
};

gulp.task('clean', function (callback) {
    del.sync([
        buildConfig.targetPath
    ], { force: true });

    callback();
});

gulp.task('build', ["clean"], function () {
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = tsProject.src()
        .pipe(tsProject())
        .once("error", function () {
            this.once("finish", () => process.exit(1));
        });

    return tsResult.pipe(gulp.dest(buildConfig.targetPath));
});

gulp.task('copyTestConfig', function () {
    return gulp
            .src('testConfig.json')
            .pipe(gulp.dest(buildConfig.targetPath));
});

gulp.task('cucumber', ["build", "copyTestConfig"], function () {
    return gulp.src('./bdd/features/**/*.feature').pipe(cucumber({
        'steps': './dist/bdd/steps/**/*.js',
        'support': './dist/bdd/support/**/*.js',
    }));
});