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
