// Reverse Words


// Write a function `reverseWords` that takes in a sentence as a string and
// reverses the words within the sentence. Each word within the sentence is
// seperated by a space and you can assume there will not be more than one
// space between words.
function reverseWords(str){
  // -------------------- Your Code Here --------------------
  var strArr=str.split(" ");
  for(var i=0;i<strArr.length;i++){
    var newWord = "";
    for(var j=strArr[i].length-1;j>=0;j--){
      newWord+=strArr[i][j];
    }
    strArr[i]=newWord;

  }
  return strArr.join(" ")

  // -------------------- End Code Area ---------------------
}


module.exports = reverseWords;