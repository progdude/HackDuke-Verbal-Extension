"use strict";

var activeTab;

if (annyang) {
  console.log("listening");
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
    
    'close': function() {
      console.log("close");
      chrome.runtime.sendMessage({
        greeting: "close"
      });
    },
    'go to *term': function(term){
      console.log("goto");
      var url1 = "http://" + term + ".com";
      chrome.runtime.sendMessage({
        greeting: "goto",
        url: url1 
      });
    },
    'new tab *term': function(term){
      console.log(term);
          var url1="http://"+term+".com";
          chrome.tabs.create({ url: url1});
    },
'go back':function() {
  console.log("realback");
  var count = 0;
  chrome.history.search({text: '', maxResults: 2}, function(data) {
          data.forEach(function(page) {
            count++;
            if (count > 0) {
              chrome.runtime.sendMessage({
                greeting: "back",
                url: page.url
              });
            }
        });
    });
}


  };



  

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
  };

