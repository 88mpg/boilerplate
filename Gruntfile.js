module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifiyJS: true,
        },
        files: [{
          expand: true,
          cwd: 'src',
          src: ['**/*.html'],
          dest: 'build/'
        }]
      },
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'build/assets/css/main.min.css': 'src/assets/scss/bootstrap.scss',
        }
      } 
    },
    jshint: {
      files: ['src/assets/js/*.js'],
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
          src: 'src/assets/js/*.js',
          dest: 'build/assets/js/main.min.js'
        }]
      },
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/assets/img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'build/assets/img/'
        }]
      }
    },
    watch: {
      js: {
        files: ['src/assets/js/*.js'],
        tasks: ['jshint', 'uglify'],
      },
      css: {
        files: ['src/assets/scss/*.scss'],
        tasks: ['sass'],
      },
      html: {
        files: ['src/**/*.html'],
        tasks: ['htmlmin'],
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

  grunt.registerTask('default', ['sass', 'jshint', 'uglify', 'imagemin', 'htmlmin']);
  grunt.registerTask('html', ['htmlmin']);
  grunt.registerTask('css', ['sass']);
  grunt.registerTask('img', ['imagemin']);
};