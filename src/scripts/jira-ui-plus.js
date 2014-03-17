$(document).ready(function() {
	injectStylesheet();
});

/* Global */

function injectStylesheet() {

	/* Inject stylesheet into the tab */
	
	var path = chrome.extension.getURL('dist/master.min.css');

	$('head').append($('<link>')
		.attr("rel","stylesheet")
		.attr("type","text/css")
		.attr("href", path));

}