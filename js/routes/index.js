App.IndexRoute = Em.Route.extend({
	redirect: function () {
		this.transitionTo('chapter', 1);
	}
});