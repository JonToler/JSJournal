var Entry = require('./../js/journal.js').journalModule;

$(function(){
  $('#journal-form').submit(function(event){
    event.preventDefault();
    var userInput = $("#entry").val().replace(/\s\s+/g,' ');
    var myEntry = new Entry (userInput);
    //console.log(myEntry.paragraph.split(" "));
    //do some journal stuff
    $('#journal').append("<li>" + myEntry.paragraph + "</li>");
  });
});
