module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // htmlmin: {
    //   dist: {
    //     options: {
    //       removeComments: true,
    //       collapseWhitespace: true,
    //       link: true,
    //       minifyCSS: true,
    //       minifiyJS: true,
    //     },
    //     files: {
    //       'index.html': 'index-src.html',
    //     }
    //   },
    // },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'assets/css/main.min.css': 'src/scss/main.scss',
          'assets/vendor/css/bootstrap.min.css': 'assets/vendor/scss/bootstrap.scss'
        }
      } 
    },
    jshint: {
      files: ['src/js/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },
    uglify: {
      my_target: {
        files: [{
          src: 'src/js/*.js',
          dest: 'assets/js/main.min.js'
        }]
      },
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'assets/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'assets/images/'
        }]
      }
    },
    watch: {
      js: {
        files: ['src/js/*.js', 'vendor/js/**/*.js'],
        tasks: ['jshint', 'uglify', 'concat'],
        options: {
          livereload: true,
        }
      },
      css: {
        files: ['src/scss/*.scss','assets/vendor/scss/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
          livereload: true,
        }
      },
      html: {
        files: ['*.html','**/*.html'],
        tasks: ['imagemin'],
        options: {
          livereload: true,
        }
      }
    },
  });

  // grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['sass', 'jshint', 'uglify', 'imagemin']);
};