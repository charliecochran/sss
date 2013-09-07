App.ChapterController = Em.ObjectController.extend({
	nextChapter: null,
	previousChapter: null,
	hasNext: false,
	hasPrevious: false,
	chapterView: null,
	slugChanged: function () {
		this.set('chapterView', Ember.View.create({ templateName: this.get('slug') }));
	}.observes('slug'),
	nextPreviousChanged: function () {
		this.set('nextChapter', App.chapters.findBy('id', this.get('next')));
		this.set('previousChapter', App.chapters.findBy('id', this.get('previous')));
		this.set('hasNext', !!this.get('next'));
		this.set('hasPrevious', !!this.get('previous'));
	}.observes('next,previous')
});