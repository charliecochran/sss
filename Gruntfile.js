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
		includes: {
			files: {
				src: 'js/templates/*.hbs',
				dest: 'js/templates/tmp',
				flatten:true
			},
			options: {
				includePath: 'public/examples'
			}
		},
		watch: {
			concat: {
				files: ['js/*.js', 'js/controllers/*.js', 'js/routes/*.js', 'js/views/*.js', 'css/*.css'],
				tasks: ['concat', 'copy']
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
	grunt.loadNpmTasks('grunt-includes');
	
	// Default task(s).
	grunt.registerTask('default', ['includes', 'emberTemplates', 'concat', 'copy']);

};