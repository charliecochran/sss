App.ChapterRoute = Em.Route.extend({
	model: function(params) {
		return App.chapters.findBy('id', params.chapter_id);
	}
});