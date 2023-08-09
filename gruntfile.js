const sass = require('node-sass');
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			options: {
			  livereload: true
			},
			scss: {
				files: ['src/sass/**/*.sass', 'src/sass/**/*.scss'],
				tasks: ['sass', 'postcss'],
				options: {
					interrupt: true
				}
			},
			pug: {
				files: ['src/pug/**/*.pug'],
				tasks: ['pug'],
				options: {
					interrupt: true
				}
			}
		},
		pug: {
			compile: {
				options: {
					pretty: true
				},
				files: [{
					src: ['**/*.pug', '!**/_*.pug'],
					dest: "static/",
					ext: ".html",
					cwd: "src/pug/",
					expand: true
				}]
			}
		},
		sass: {
			dist: {
				options: {
					implementation: sass,
					outputStyle: 'expanded',
					sourceMap: true
				},
				files: [{
					expand: true,
					cwd: 'src/sass/',
					src: ['*.scss'],
          dest: 'static/css/',
					ext: '.css'
				}]
			},
      compressed: {
        options: {
          implementation: sass,
          outputStyle: 'compressed',
          sourceMap: true
        },
        files: {
          'static/css/style.min.css': 'src/sass/style.scss'
        }
      }
		},
		postcss: {
			options: {
				map: false,
				processors: [
					require('autoprefixer')
				]
			},
			dist: {
        src: ['static/css/style.css']
			},
      compressed: {
        src: ['static/css/style.min.css']
      }
		},
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'static',
          useAvailablePort: true,
          keepalive: true,
          open: {
            target: 'http://localhost:9001',
          }
        }
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'static/css/*.css',
            'static/*.html'
          ]
        },
        options: {
          port: 3333,
          watchTask: true,
          server: './static'
        }
      }
    }
	});

	// Load the Grunt plugins.
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-pug');
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-browser-sync');

	// Set task aliases
	grunt.registerTask('default', ['browserSync','watch']);
	grunt.registerTask('build', ['pug','sass','postcss']);
};
