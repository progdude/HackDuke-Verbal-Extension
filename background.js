"use strict";

if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
    'Google': function() {
    chrome.tabs.create({ url: "http://google.com"});
    console.log("hello");
    },

        'Facebook': function() {
    chrome.tabs.create({ url: "http://facebook.com"});
    },

    'show me *term': function(term){
          var url1="http://"+term+".com";
          chrome.tabs.create({ url: url1});
    }

  };



  

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}
console.log("what up");