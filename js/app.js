App = Em.Application.create();

App.chapters = Em.A([
	{
		id: '1',
		next: '2',
		previous: null,
		slug: 'chapter-01',
		title: 'Introduction'
	},
	{
		id: '2',
		next: null,
		previous: '1',
		slug: 'chapter-02',
		title: 'The Stuff'
	}
]);