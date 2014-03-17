$(document).ready(function() {
	injectStylesheet();
	headerReplaceBoardName();
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

/* Header */

function headerReplaceBoardName() {

	/* Replace board name with controls panel to capitalize on space */
	var $operationsList = $('#ghx-operations'),
	$boardname = $('#ghx-board-name'),
	$header = $('#ghx-header');

	$boardname.remove();
	$operationsList.appendto($header);
	
}