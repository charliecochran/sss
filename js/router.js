App.Router.map(function () {
	this.resource('chapters', function () {
		this.resource('chapter', { path: ':chapter_id' });
	});
});