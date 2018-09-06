// 1. Configure Server
var express = require("express");
var PORT = 8080;

var app = express();

//Expected Output: 
// "ethae uickqae ownbrae ogdae umpedjae overwae ethae azylae oxfae applewae"
var input = "The quick brown dog jumped over the lazy fox apple"

function pigLatin(sen) {
  // 2. ================= YOUR WORK HERE ==================
  var vowelArr =["a","e","i","o","u"];
  var wordArr = sen.split(" ");
  for(var i =0;i<wordArr.length;i++){
    var newWord = "";
    var newWord2 = "";
    var j =0;
    var firstCharVowel = true;
    while(vowelArr.indexOf(wordArr[i][j]) === -1){
      firstCharVowel = false;
      newWord =  newWord + wordArr[i][j];
      j++;
    }
    while(j<wordArr[i].length){
      newWord2= newWord2+wordArr[i][j];
      j++;
    }
    newWord= newWord2+newWord;
      
    if(firstCharVowel)
      newWord+="wae";
    else
      newWord+="ae";

    wordArr[i] = newWord;  
  }

  return wordArr.join(" ");






  // ===================================================
}


// At the root route, send the solution as JSON
  //3. ================= YOUR WORK HERE ==================
  
app.get("/",function(req,res){
  res.json(pigLatin(input.toLowerCase()));
});





  // ===================================================


// Listener
// ===========================================================

// 1. Create server

app.listen(PORT,function(){
  console.log("App listening on PORT " + PORT);
});