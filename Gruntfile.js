module.exports = function (grunt) {
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app',
        dist: 'dist'
    };

    grunt.initConfig({

        // Project settings
        es6angularjs: appConfig,

        jshint: {
            files: ['Gruntfile.js', 'app/js/src/*.js', 'app/js/src/**/*.js', 'test/**/*.js', 'sass/*.scss'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },

        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['shell', 'sass:dist']
        },

        shell: {
            options: {
                stderr: false
            },
            target: {
                command: 'jspm bundle-sfx ./app/js/src/main ./app/js/builds/build.js'
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'sass',
                    src: ['*.scss'],
                    dest: 'app/css',
                    ext: '.css'
                }]
            }
        }

    });

    grunt.registerTask('default', [ 'watch']);



};