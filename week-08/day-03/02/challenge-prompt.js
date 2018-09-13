// Keyboard Row


// the `keyboardRow` function takes in an array of strings and
// returns a new array containing all the words that can be
// individually typed on a single row of a standard "QWERTY"
// keyboard.
function keyboardRow(arr) {
  // -------------------- Your Code Here --------------------
  var boardLine1 ="qwertyuiop";
  var boardLine2 ="asdfghjkl";
  var boardLine3 ="zxcvbnm";

  var boardLine1Obj={};
  for(var i=0;i<boardLine1.length;i++){
    boardLine1Obj[boardLine1[i]] = true;
  }
  //console.log(boardLine1Obj);

  var boardLine2Obj={};
  for(var i=0;i<boardLine2.length;i++){
    boardLine2Obj[boardLine2[i]] = true;
  }
  //console.log(boardLine2Obj);

  var boardLine3Obj={};
  for(var i=0;i<boardLine3.length;i++){
    boardLine3Obj[boardLine3[i]] = true;
  }
  //console.log(boardLine3Obj);

  var result=[];

  for(var i =0;i<arr.length;i++){
    var checkLine1 = false;
    var checkLine2 = false;
    var checkLine3 = false;
    if(boardLine1Obj[arr[i][0]])
      checkLine1 = true;
    else if(boardLine2Obj[arr[i][0]])
      checkLine2 = true;
    else if(boardLine3Obj[arr[i][0]])
      checkLine3 = true;

      console.log(checkLine1,checkLine2,checkLine3)
    var check =true;
    for(var j=1;j<arr[i].length;j++){
      if(checkLine1)
        if(!boardLine1Obj[arr[i][j]]){
          check = false;
          console.log("nomatch:"+arr[i][j])
        }
        else
        console.log("match:"+arr[i][j])

      else if(checkLine2)
        if(!boardLine2Obj[arr[i][j]]){
          check = false;
          console.log("nomatch:"+arr[i][j])
        }
        else
        console.log("match:"+arr[i][j])

      else if(checkLine3)
        if(!boardLine3Obj[arr[i][j]]){
          check = false;
          console.log("nomatch:"+arr[i][j])
        }
        else
        console.log("match:"+arr[i][j])
    }
    if(check)
      result.push(arr[i])
  }

  return result;



  // -------------------- End Code Area ---------------------
}


var wordArray = ["pet", "world", "bc", "hello", "a", "flash", "blastoff", "to"]
// Should be [ 'pet', 'bc', 'a', 'flash', 'to' ]
console.log(keyboardRow(wordArray))
