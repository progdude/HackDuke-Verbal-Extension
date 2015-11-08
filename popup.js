chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "back"){
    	chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
      chrome.tabs.update(tab.id, {url: request.url});
  })
}
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "goto"){
    	chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
      chrome.tabs.update(tab.id, {url: request.url});
  })
}
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "close"){
    	chrome.tabs.getSelected(null, function (tab) {
    		chrome.tabs.remove(tab.id, function(){ });
    	});
 
  }
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "closeAll"){
    	chrome.tabs.getAllInWindow(null, function(tabs){
    	for (var i = 0; i < tabs.length; i++) {
    		chrome.tabs.remove(tabs[i].id);                         
    }
});
 
  }
});