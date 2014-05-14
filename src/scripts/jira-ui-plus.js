/* Global */

var jiraUIPlus = {

	initialize: function() {
		this.injectStylesheet();
		this.epicProgressBarColor();

		// If work view
		this.moveFilters();
		//this.closeDoneSwimlanes();
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
	},

	moveFilters: function() {
		$('#ghx-board-name').remove().appendTo('#ghx-header');
		$('#ghx-operations').remove().appendTo('#ghx-header');
	},

	closeDoneSwimlanes: function() {
		// Will have to enable this feature when async callback is figured out
		if ($('.ghx-swimlane-header')) {
			$('.ghx-swimlane-header').each(function(){
				if ($(this).hasClass('ghx-done')) {
					$(this).parent().addClass('.ghx-closed');
				}
			});
		}
	}
};

$(document).ready(function() {
	jiraUIPlus.initialize();
});