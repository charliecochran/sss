App.ChapterView = Em.View.extend({
	layoutName: 'chapter-layout',
	idChanged: function() {
		var id = this.get('controller.id'),
				num = id >= 10 ? id : '0' + id;
		console.log(num);
		this.set('templateName', 'chapter-' + num);
		this.rerender();
	}.observes('controller.id')
});