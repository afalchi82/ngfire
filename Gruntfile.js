module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Pkg
    pkg: grunt.file.readJSON('package.json'),

    // Uglify
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },      
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    // Serve
    serve: {
      options: {
        serve: {
          path: '/User'
        }
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "serve" task.
  grunt.loadNpmTasks('grunt-serve');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'grunt-serve']);

};