var gulp = require('gulp');
gulp.task("copy",function(){
	gulp.src("./**/*")
	.pipe(gulp.dest("D:\phpStudy\WWW\xiangmu"));
	
});
gulp.task("copy-html",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("D:\phpStudy\WWW\xiangmu"));
	
});
gulp.task("copy-img",function(){
	gulp.src("img/*")
	.pipe(gulp.dest("D:\phpStudy\WWW\xiangmu"));
	
});
gulp.task("copy-php",function(){
	gulp.src("*.php")
	.pipe(gulp.dest("D:\phpStudy\WWW\xiangmu"));
	
});
gulp.task("copy-js",function(){
	gulp.src("*.js")
	.pipe(gulp.dest("D:\phpStudy\WWW\xiangmu"));
	
});
gulp.task("copy-css",function(){
	gulp.src("*.css")
	.pipe(gulp.dest("D:\phpStudy\WWW\xiangmu"));
	
});
gulp.task("watch",function(){
	gulp.watch("images/*.{jpg,png}",["copy-images"]);
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("*.php",["copy-php"]);
	gulp.watch("*.js",["copy-js"]);
	gulp.watch("*.css",["copy-css"]);

});