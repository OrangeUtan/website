import gulp from 'gulp';
import spritesmith from 'gulp.spritesmith';
import imagemin from 'gulp-imagemin';
import buffer from 'vinyl-buffer';
import csso from 'gulp-csso';
import merge from 'merge-stream';

gulp.task('spritesheets', function () {
	var spriteData = gulp.src('static/images/hats/icons/*.png').pipe(
		spritesmith({
			imgName: 'icons.png',
			cssName: 'icons.css'
		})
	);

	// Pipe image stream through image optimizer and onto disk
	var imgStream = spriteData.img
		// DEV: We must buffer our stream into a Buffer for `imagemin`
		.pipe(buffer())
		.pipe(imagemin())
		.pipe(gulp.dest('static/images/hats/spritesheets/'));

	// Pipe CSS stream through CSS optimizer and onto disk
	var cssStream = spriteData.css.pipe(csso()).pipe(gulp.dest('static/images/hats/spritesheets/'));

	return merge(imgStream, cssStream);
});
