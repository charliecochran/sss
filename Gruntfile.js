module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			build: 'build',
			templates: 'js/templates/tmp'
		},
		concat: {
			controllers: {
				src: ['js/controllers/*.js'],
				dest: 'js/controllers.js'
			},
			routes: {
				src: ['js/routes/*.js'],
				dest: 'js/routes.js'
			},
			views: {
				src: ['js/views/*.js'],
				dest: 'js/views.js'
			},
			appjs: {
				src: [
					'js/libs/jquery-1.10.2.min.js',
					'js/libs/ace.js',
					'js/libs/ext-emmet.js',
					'js/libs/editr/libs/ext.emmet.js',
					'js/libs/editr/editr.js',
					'js/libs/handlebars.min.js',
					'js/libs/ember.min.js',
					'js/libs/prettify.js',
					'js/app.js',
					'js/templates.js',
					'js/views.js',
					'js/router.js',
					'js/routes.js',
					'js/controllers.js'
				],
				dest: 'build/sss.js'
			},
			appcss: {
				src: [
					'css/bootstrap.min.css',
					'css/prettify.css',
					'css/sunburst.css',
					'css/editr.css',
					'css/style.css'
				],
				dest: 'build/sss.css'
			}
		},
		copy: {
			main: {
				expand:true,
				cwd: 'public',
				src: ['**'],
				dest: 'build'
			}
		},
		emberTemplates: {
			compile: {
				files: {
					'js/templates.js': 'js/templates/tmp/*.hbs'
				},
				options: {
					templateName: function (sourceFile) {
						return sourceFile.replace(/js\/templates\/tmp\//, '');
					}
				}
			}
		},
		includereplace: {
			examples: {
				options: {
					prefix: '',
					includesDir: 'public/examples'
				},
				cwd: 'js/templates',
				src: '*.hbs',
				dest: 'js/templates/tmp',
				expand: true
			}
		},
		watch: {
			concat: {
				files: ['js/*.js', 'js/controllers/*.js', 'js/routes/*.js', 'js/views/*.js', 'css/*.css'],
				tasks: ['clean:build', 'concat', 'copy']
			},
			emberTemplates: {
				files: ['js/templates/*.hbs', 'public/examples/**/*.html'],
				tasks: ['clean:templates', 'includereplace:examples', 'emberTemplates']
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ember-templates');
	grunt.loadNpmTasks('grunt-include-replace');
	
	// Default task(s).
	grunt.registerTask('default', ['clean', 'includereplace:examples', 'emberTemplates', 'concat', 'copy']);

};