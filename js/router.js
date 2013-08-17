App.Router.map(function () {
	this.route('chapter-01');
	this.route('chapter-02');
});

App.IndexRoute = Ember.Route.extend({
	redirect: function () {
		this.transitionTo('chapter-01');
	}
});