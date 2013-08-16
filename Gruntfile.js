module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
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
			emberTemplates: {
				files: 'js/templates/*.hbs',
				tasks: ['emberTemplates']
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ember-templates');
	
	// Default task(s).
	grunt.registerTask('default', ['emberTemplates']);
	grunt.registerTask('watch', ['watch']);

};