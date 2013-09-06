App.Router.map(function () {
	this.route('next');
	this.route('previous');
	this.route('chapter', { path: '/chapter/:id' });
});