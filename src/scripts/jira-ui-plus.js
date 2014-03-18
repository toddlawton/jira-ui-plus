/* Global */

var jiraUIPlus = {

	initialize: function() {
		this.injectStylesheet();
		this.epicProgressBarColor();
	},

	injectStylesheet: function () {
		/* Inject stylesheet into the tab */
		var path = chrome.extension.getURL('dist/master.min.css');

		$('head').append($('<link>')
			.attr("rel","stylesheet")
			.attr("type","text/css")
			.attr("href", path));
	},

	epicProgressBarColor: function() {
		/* Color the side menu progress bars of Epics based on % complete */
		this.$progressBars = $('.ghx-classification-progress');
		this.$progressBars.each(function(){
			console.log('%c'+ $(this).attr('title'), 'background: yellow;');
		});
	}
};

$(document).ready(function() {
	jiraUIPlus.initialize();
});