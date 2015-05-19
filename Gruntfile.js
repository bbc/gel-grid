module.exports = function(grunt) {

    // store the paths
    grunt.config('dir', {
        static:      'assets/',
        static_sass: '<%= dir.static %>' + 'sass/',
        static_css:  '<%= dir.static %>' + 'css/',
        static_img:  '<%= dir.static %>' + 'images/'
    });

    // register the tasks, but only just before we need to keep the excution time down
    require('jit-grunt')(grunt);

    // get me some tasks
    grunt.loadTasks('grunt');

    grunt.registerTask('default', ['sass:development', 'watch']);
    grunt.registerTask('production', ['sass:dist']);
};
