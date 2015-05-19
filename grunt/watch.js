module.exports = function (grunt) {
    grunt.config('watch', {
        sass: {
            files: ['<%= dir.static_sass %>/**/*.scss'],
            tasks: ['sass:development']
        }
    });
};
