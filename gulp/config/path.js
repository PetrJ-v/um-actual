import * as nodePath from 'path'

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = './dist';
const srcFolder = './src';

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/libs/`,
		htmlComponents: `${buildFolder}/html-components/`,
		enHtml: `${buildFolder}/en/`,
		ruHtml: `${buildFolder}/ru/`,

	},
	src: {
		js: `${srcFolder}/js/*.js`,
		images: [`${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`, `!${srcFolder}/img/meta-img/**/*.*`],
		svg: `${srcFolder}/img/**/*.svg`,
		scss: `${srcFolder}/sass/*.sass`,
		html: `${srcFolder}/*.html`,
		files: `${srcFolder}/libs/**/*.*`,
		htmlComponents: `${srcFolder}/html-components/**/*.*`,
		enHtml: `${srcFolder}/en/**/*.html`,
		ruHtml: `${srcFolder}/ru/**/*.html`,
	},
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/sass/**/*.sass`,
		html: `${srcFolder}/**/*.html`,
		images: `${srcFolder}/**/*.{jpg,jpeg,png,gif,webp, svg}`,
		files: `${srcFolder}/libs/**/*.*`,
		htmlComponents: `${srcFolder}/html-components/**/*.*`,
		enHtml: `${srcFolder}/en/**/*.*`,
		ruHtml: `${srcFolder}/ru/**/*.*`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: 'htdocs/test',
}
