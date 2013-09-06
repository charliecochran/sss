App.ChapterRoute = Em.Route.extend({
	model: function(params) {
		return Em.Object.create({ id: params.id });
	},
	actions: {
		next: function(route_id) {
			this.transitionTo('/chapter/' + ((+route_id)+1));
		},
		previous: function(route_id) {
			this.transitionTo('/chapter/' + ((+route_id)-1));
		}
	}
});