chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "back"){
    	chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
      chrome.tabs.update(tab.id, {url: request.url});
  })
}
});

document.getElementById('ad').addEventListener('onclick', add);

function add(){
	var command = document.getElementById("command").value;
	var website = document.getElementById("website").value;
	     
        chrome.runtime.sendMessage({
            greeting: "add",
            command: command,
            website: website
         });
}    