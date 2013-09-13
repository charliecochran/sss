App.ChapterRoute = Em.Route.extend({
	model: function(params) {
		return App.chapters.findBy('id', params.chapter_id);
	},
	afterModel: function() {
		window.scrollTo(window.scrollX, 0);
	}
});