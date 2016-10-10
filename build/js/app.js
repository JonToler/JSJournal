(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./../js/journal.js":2}],2:[function(require,module,exports){
function Entry (paragraph){
  this.paragraph = paragraph;
}

var vowels = ["a", "e", "i", "o", "u"];

Entry.prototype.countWords = function(){
  var paragraphArray = this.paragraph.split(" ");
  for (var i = paragraphArray.length - 1; i >= 0; i--) {
    if(paragraphArray[i] === "")
    paragraphArray.pop(i);
  }
  return paragraphArray.length;
};

Entry.prototype.countVowels = function(){
  var countChars = this.paragraph.toLowerCase().split("");
  var vowelCount = 0;
  for (var i = 0; i < vowels.length; i++) {
    for (var j = 0; j < countChars.length; j++) {
      if (countChars[j] ===  vowels[i] ) {
        vowelCount++;
      }
    }
  }
  return vowelCount;
};

Entry.prototype.countConsonants = function() {
  var paragraphArray = this.paragraph.split("");
  var noSpaces = this.paragraph.replace(/\s/,'');
  return noSpaces.length - this.countVowels(this.paragraph);
};

Entry.prototype.getTeaser = function() {
  var paragraphArray = this.paragraph.split("");
  var paragraphArrayCopy = [];
  var wordCount = 0;

  for (var i = 0; i < paragraphArray.length; i++) {
    paragraphArrayCopy.push(paragraphArray[i]);
    if (paragraphArray[i] === " ") {
      wordCount++;
      if (wordCount === 8) {
        break;
      }
    }else if (paragraphArray[i] === ".") {
      break;
    }
  }
  var sentence = paragraphArrayCopy.join("");
  return sentence;
};
exports.journalModule = Entry;

},{}]},{},[1]);
