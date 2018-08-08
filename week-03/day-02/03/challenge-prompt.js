// Day 02
// Activity 03

// This function checks whether the argument string fulfills the requirements
// for "Wibble". It should return true if the string has an even number of characters
// and false if it doesn't
function checkWibble(str) {

  // ---------- Your Code Here ----------
if(str.length %2 === 0)
  return true;
else
  return false;

  // ----------- End Code Area -----------

}


// This function checks whether the argument string fulfills the requirements
// for "Wobble". It should return true if the string has an odd number of vowels
// and false if it doesn't
function checkWobble(str) {

  // ---------- Your Code Here ----------
var countVowels =0;
for( var i =0;i<str.length;i++){

  if(str[i] === "a" || str[i] ==="e" || str[i] ==="i" || str[i] ==="o"|| str[i] ==="u"){
    countVowels++;
  }
}
if(countVowels % 2 ===1)
  return true;
else
  return false;


  // ----------- End Code Area -----------

}


// This is the `wibbleWobble` function. It takes in an array of strings and replaces
// the elements that have an even number of characters with "Wibble" and the elements
// that have an odd number of vowels with "Wobble". If a element has both an even number
// of characters and an odd number of vowels, it should replace that element with
// "WibbleWobble". 

function wibbleWobble(arr) {
  
  // ---------- Your Code Here ----------
  for(var i =0;i<arr.length;i++){
    if(checkWibble(arr[i]) && checkWobble(arr[i])){
      arr[i] = "WibbleWobble";
    }
    else if(checkWibble(arr[i])){
      arr[i] = "Wibble";
    }
    else if(checkWobble(arr[i])){
      arr[i] = "Wobble";
    }
  }

  // ----------- End Code Area -----------
  return arr;
}


// The following code will call on your function and display the results on the webpage
$(function() {

  // This is the array we're going to use to test your code:
  var testArray = [
    "respond",
    "even",
    "banana",
    "hello",
    "goodbye",
    "yes",
    "okay",
    "seeks",
    "desk",
    "amazing",
    "wonder",
    "excel",
    "achieves",
    "someone",
    "people",
    "odd"
  ]

  // Make a copy of the testArray to use with the `wibbleWobble` function
  var newArray = wibbleWobble(testArray.slice(0));

  // This populates our table with the initial values of the array
  // and what they are after our `wibbleWobble` function
  for (var i = 0; i < testArray.length; i++) {
    var newRow = $("<tr>")
    newRow.append($("<td>").text(testArray[i]));
    newRow.append($("<td>").text(newArray[i]));
    $("#display").append(newRow);
  }

})