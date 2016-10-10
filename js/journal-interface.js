var Entry = require('./../js/journal.js').journalModule;

$(function(){
  $('#journal-form').submit(function(event){
    event.preventDefault();
    var userInput = $("#entry").val().replace(/\s+/g,' ');
    var myEntry = new Entry (userInput);
    console.log(userInput);
    //do some journal stuff
    $('#journal').append("<li>" + myEntry.countConsonants() + "</li>");
  });
});
