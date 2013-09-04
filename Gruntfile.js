module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			controllers: {
				src: ['js/controllers/*.js'],
				dest: 'js/controllers.js'
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
				files: 'js/controllers/*.js',
				tasks: ['concat:controllers']
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