module.exports = function(grunt) {
    grunt.config('sass', {
        dist: {
            expand: true,
            cwd: '<%= dir.static_sass %>',
            src: ['**/*.scss', '!**/_*.scss'],
            dest: '<%= dir.static_css %>',
            ext: '.css',
            options: {
                outputStyle: 'compressed'
            }
        },
        development: {
            expand: true,
            cwd: '<%= dir.static_sass %>',
            src: ['**/*.scss', '!**/_*.scss'],
            dest: '<%= dir.static_css %>',
            ext: '.css',
            options: {
                outputStyle: 'expanded',
                sourceComments: true,
                sourceMap: true
            }
        }
    });
};
