// Longest substring



// This function takes in a string and returns the longest substring that doesn't
// contain repeated characters
function longestSubstring(str) {
  // -------------------- Your Code Here --------------------
var length =0;
var maxLength =0;
var obj ={};
var resultStr="";
var resultString="";
for(var i =0;i<str.length;i++){
  if(!obj[str[i]]){
    obj[str[i]] = true;
    length++;
    resultStr = resultStr+ str[i];
  }
  else{
    if(maxLength<length){
      maxLength = length;
      resultString = resultStr;
      length =0;
      resultStr="";
      i--;
      obj={};
    }
  }
}
if(maxLength<length){
  maxLength = length;
  resultString = resultStr;
}
return resultString;






  // --------------------- End Code Area --------------------
}


// Export the longest substring for use by the testing function
module.exports = longestSubstring;
