import webpack from "webpack-stream";

export const js = () => {
	return app.gulp.src(app.path.src.js)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "JS",
				message: "Eror: <%= error.message %>"
			}))
		)
		// .pipe(webpack({
		// 	mode: app.isBuild ? 'production' : 'development',
		// 	output: {
		// 		filename: 'app.min.js',
		// 	}
		// }))
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browserSync.stream());
}
