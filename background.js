"use strict";

//capitalOne
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

var names = [];
var ids = [];
var account = [];

function findId(nickname){
    for(var i=0; i<ids.length; i++){
      if(nickname[i]==nickname){
        return accounts[i];
      }
    }
  }

$.get( "http://api.reimaginebanking.com/accounts?key=20496afd86b44b0ec2e8631b6947d265", function( data ) {
  console.log("whats up");
  for(var i=0; i<data.length; i++){
    console.log()
    account[i] =data[i]._id;
    names[i] = data[i].nickname;//.replace("s Account","");//str.replace("Microsoft", "W3Schools");
    ids[i] = data[i].customer_id;
      }
});

sleep(1000);


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
},

'close all':function() {
  console.log("close all");
  chrome.runtime.sendMessage({
        greeting: "closeAll"
      });
}


  };



  

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
  };

