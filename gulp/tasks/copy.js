export async function copy() {
	app.gulp.src(app.path.src.files)
		.pipe(app.gulp.dest(app.path.build.files))
	// app.gulp.src(app.path.src.htmlComponents)
	// 	.pipe(app.gulp.dest(app.path.build.htmlComponents))
	// app.gulp.src(app.path.src.enHtml)
	// 	.pipe(app.gulp.dest(app.path.build.enHtml))
	// app.gulp.src(app.path.src.ruHtml)
	// 	.pipe(app.gulp.dest(app.path.build.ruHtml))
}
