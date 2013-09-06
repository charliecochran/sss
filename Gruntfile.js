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
				files: ['js/controllers/*.js', 'js/routes/*.js', 'js/views/*.js'],
				tasks: ['concat:controllers', 'concat:routes', 'concat:views']
			},
			emberTemplates: {
				files: 'js/templates/*.hbs',
				tasks: ['emberTemplates']
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ember-templates');
	
	// Default task(s).
	grunt.registerTask('default', ['emberTemplates']);

};