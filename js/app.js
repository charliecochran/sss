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
		next: '3',
		previous: '1',
		slug: 'chapter-02',
		title: 'The Stuff'
	},
	{
		id: '3',
		next: '4',
		previous: '2',
		slug: 'chapter-03',
		title: 'Tags'
	},
	{
		id: '4',
		next: '5',
		previous: '3',
		slug: 'chapter-04',
		title: 'The Textual Elements'
	},
	{
		id: '5',
		next: null,
		previous: '4',
		slug: 'chapter-05',
		title: 'Necessary Elements'
	}
]);