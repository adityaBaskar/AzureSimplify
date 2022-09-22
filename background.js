function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        sleep(10000)
        alert("Hello! I am an alert box!!");
        var activeTab = tabs[0];
		var activeTabId = activeTab.id; // or do whatever you need
   
		chrome.scripting.executeScript({
			target: {tabId: activeTabId},
			files: ['main.js']
		});
        
    }
  })