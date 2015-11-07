var bg = chrome.extension.getBackgroundPage();

function fun(){
	chrome.tabs.create({ url: "http://google.com"});
}

document.getElementById('s').onclick = fun;