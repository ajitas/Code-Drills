
  var string = "ilovetowritecode";
  var character = "o"
  
  function distanceFrom(str, char) {
// ===================== YOUR WORK HERE =====================
  var resultArray=[];
  for(var i =0;i<str.length;i++){
    //at each position i find the next and previous position of char
    var nextCharacter = str.indexOf(char,i);
    var previousCharacter = str.substring(0,i).lastIndexOf(char);
    //if char exists after position i, then find the difference between next position and position i
    if(nextCharacter>=0) nextCharacter = nextCharacter-i;
    //else set it to str.length(to make sure, it is always ignored in Math.min later)
    else nextCharacter=str.length;

     //if char exists before position i, then find the difference between previous position and position i
    if(previousCharacter >=0) previousCharacter = i-previousCharacter;
    //else set it to str.length(to make sure, it is always ignored in Math.min later)
    else previousCharacter=str.length;

    //find minimum
    var distance = Math.min(nextCharacter,previousCharacter);
    resultArray.push(distance);

  }
  return resultArray;
// ==========================================================
  }
  
  console.log(distanceFrom(string, character))
 