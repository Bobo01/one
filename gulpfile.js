var gulp = require('gulp');
/*	
	gulp.task("copy",function(){
		gulp.src("*")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\xiangmu"));
	});
*/	
gulp.task("copy-html",function(){
	gulp.src("index.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\xiangmu"));
	
});

gulp.task("copy-html/html",function(){
	gulp.src("html/*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\xiangmu\\html"));
	
});

gulp.task("copy-html/php",function(){
	gulp.src("html/*.php")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\xiangmu\\html"));
	
});


gulp.task("copy-images",function(){
	gulp.src("images/*/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\xiangmu\\images"));
	
});

gulp.task("copy-js",function(){
	gulp.src("js/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\xiangmu\\js"));
	
});
gulp.task("copy-css",function(){
	gulp.src("css/*.css")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\xiangmu\\css"));	
});
gulp.task("watch",function(){
	gulp.watch("images/*/*",["copy-images"]);
	gulp.watch("index.html",["copy-html"]);
	gulp.watch("html/*.html",["copy-html/html"]);
	gulp.watch("html/*.php",["copy-html/php"]);	
//	gulp.watch("php/*.php",["copy-php"]);
	gulp.watch("js/*.js",["copy-js"]);
	gulp.watch("css/*.css",["copy-css"]);
//	gulp.watch("*",["copy"]);
	
});