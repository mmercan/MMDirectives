/// <reference path="wwwroot/lib/moment/min/moment.min.js" />
/// <reference path="wwwroot/lib/moment/min/moment.min.js" />
/// <reference path="wwwroot/lib/moment/min/moment.min.js" />
/// <reference path="wwwroot/lib/moment/min/moment.min.js" />
/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    project = require("./project.json"),
     less = require("gulp-less"),
        rename = require("gulp-rename"),
        autprefix = require("gulp-autoprefixer"),
inject = require("gulp-inject");

var paths = {
    webroot: "./wwwroot/"
};

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);


var AppFiles = ["wwwroot/App/*.js", "wwwroot/App/**/*.js"];
var directiveJsFiles = ["wwwroot/Directives/src/Modules/*.js", "wwwroot/Directives/src/directives/*.js", "wwwroot/Directives/src/Services/**/*.js", "wwwroot/Directives/src/Filters/**/*.js", "wwwroot/Directives/src/Controllers/*.js"];
var libjs = ["wwwroot/lib/jquery/dist/jquery.min.js", "wwwroot/lib/moment/min/moment.min.js", "wwwroot/lib/jquery-ui/jquery-ui.js", "wwwroot/lib/angular/angular.min.js", "wwwroot/lib/angular-ui-router/release/angular-ui-router.min.js", "wwwroot/lib/angular-bootstrap/ui-bootstrap-tpls.min.js", "wwwroot/lib/bootstrap/dist/js/bootstrap.min.js", "wwwroot/lib/metisMenu/dist/metisMenu.min.js"
, "wwwroot/lib/chartjs/chart.min.js", "wwwroot/lib/angles/angles.js", "wwwroot/lib/nprogress/nprogress.js", "wwwroot/lib/lodash/lodash.min.js", "wwwroot/lib/select2/select2.min.js"
]



gulp.task("inject", function () {
    gulp.src("Views/Shared/Src_Layout.cshtml")
    .pipe(inject(gulp.src(directiveJsFiles),
    { ignorePath: 'wwwroot', addRootSlash: true, name: 'directives' }))
        .pipe(inject(gulp.src(libjs),
    { ignorePath: 'wwwroot', addRootSlash: true, name: 'libraries' }))
                .pipe(inject(gulp.src(AppFiles),
    { ignorePath: 'wwwroot', addRootSlash: true, name: 'app' }))
       .pipe(rename('_Layout.cshtml'))
    .pipe(gulp.dest("Views/Shared"))

});


gulp.task("directive:Less", function () {
    gulp.src("wwwroot/directives/src/less/directives.less").pipe(less()).pipe(gulp.dest("wwwroot/directives"));
});