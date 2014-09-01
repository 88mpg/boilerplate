module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          link: true,
          minifyCSS: true,
          minifiyJS: true,
        },
        files: {
          'index.html': 'index-src.html',
        }
      },
    },
    sass: {
        dist: {
            options: {
                style: 'compressed'
            },
            files: {
                'dist/css/main.min.css': 'src/scss/main.scss'
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
            dest: 'dist/js/main.min.js'
        }]
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img/'
        }]
      }
    },
    watch: {
      js: {
        files: ['src/js/*.js'],
        tasks: ['jshint', 'uglify'],
        options: {
          livereload: true,
        }
      },
      css: {
        files: ['src/scss/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
          livereload: true,
        }
      },
      html: {
        files: ['*.html','**/*.html'],
        tasks: ['htmlmin', 'imagemin'],
        options: {
          livereload: true,
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['sass', 'jshint', 'uglify', 'htmlmin', 'imagemin']);
};