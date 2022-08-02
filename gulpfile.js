const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

exports.default = () => (
	gulp.src('./raw_images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./public/images'))
);

let numOfSeats = 28;
//number of seats in my classroom
let Class1 = 22; 
//English Block 001 
let Class2 = 22; 
//English Block 004
let Class3 = 28;
//English Block Honors 
let groupings = Class1 / 4;
console.log(groupings);
