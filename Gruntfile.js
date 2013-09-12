module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
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
					'js/libs/handlebars-1.0.0.js',
					'js/libs/ember-1.0.0.js',
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
					'js/templates.js': 'js/templates/*.hbs'
				},
				options: {
					templateName: function (sourceFile) {
						return sourceFile.replace(/js\/templates\//, '');
					}
				}
			}
		},
		watch: {
			concat: {
				files: ['js/controllers/*.js', 'js/routes/*.js', 'js/views/*.js', 'css/*.css'],
				tasks: ['concat:controllers', 'concat:routes', 'concat:views', 'concat:appjs', 'concat:appcss']
			},
			emberTemplates: {
				files: 'js/templates/*.hbs',
				tasks: ['emberTemplates']
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ember-templates');
	
	// Default task(s).
	grunt.registerTask('default', ['emberTemplates', 'concat', 'copy']);

};