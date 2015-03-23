module.exports = function (grunt) {

    grunt.initConfig({


        jshint: {
            files: ['Gruntfile.js', 'js/src/*.js', 'js/src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },

        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['shell']
        },

        shell: {
            options: {
                stderr: false
            },
            target: {
                command: 'jspm bundle-sfx --minify ./js/src/main ./js/builds/build.js'
            }
        }

    });


    //grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-shell');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);

};