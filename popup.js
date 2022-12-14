document.addEventListener('DOMContentLoaded', function() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

		// since only one tab should be active and in the current window at once
		// the return variable should only have one entry
		var activeTab = tabs[0];
		var activeTabId = activeTab.id; // or do whatever you need
   
		chrome.scripting.executeScript({
			target: {tabId: activeTabId},
			files: ['main.js']
		});
	 });
})