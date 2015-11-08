//"use strict";


$.ajaxSetup({
 async: false
});

var names = [];
var ids = [];

$.get( "http://api.reimaginebanking.com/customers?key=20496afd86b44b0ec2e8631b6947d265", function( data ) {
  //console.log(data);
  for(var i=0; i<data.length; i++){
    ids[i] = data[i]._id;
    names[i] = data[i].first_name;
  }
});

  function findId(name){
    for(var i=0; i<ids.length; i++){
      if(name[i]==name){
        return ids[i];
      }
    }
  }


if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {

    'go to *term': function(term){
          var url1="http://"+term+".com";
          console.log(url1);
          chrome.tabs.create({ url: url1});
    },

    'deposit :money in :account': function(money, account){
      //console.log(money+" "+account);
      $.post( "http://api.reimaginebanking.com/accounts/"+money+"/deposits?key=20496afd86b44b0ec2e8631b6947d265", function( data ) {
        console.log(data);
    });
    },

    'go back': function(){
      console.log("swag");


      chrome.history.search({text: '', maxResults: 1}, function(data) {
          data.forEach(function(page) {
              chrome.runtime.sendMessage({
                greeting: "back",
                url: page.url
              });
        });
    });
}


    

  };



  

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}
