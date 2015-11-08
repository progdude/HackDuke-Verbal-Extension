//"use strict";


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

//for(var f = 0; f<names.length; f++){

  //console.log(names[0]);
//}

  function findId(nickname){
    for(var i=0; i<ids.length; i++){
      if(nickname[i]==nickname){
        return accounts[i];
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

    'deposit :money in *account': function(money, account){
      console.log(money+" "+account);
      var acc = findId(account);
      $.post( "http://api.reimaginebanking.com/accounts/"+money+"/deposits?key="+acc, function( data ) {
        console.log(data);
    });
    },

    'go back': function(){
      console.log("swag");
      var count=0;
      chrome.history.search({text: '', maxResults: 2}, function(data) {
          data.forEach(function(page) {
            count++;
            if(count==2){
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
}
