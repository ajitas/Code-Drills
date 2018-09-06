// 1. Configure Server
var express = require("express");

var PORT = 8080;
var app = express();

//Expected Output: 
// {
//   jerome: 50,
//   code: 80,
//   org: 58,
//   ricky: 30,
//   com: 90,
//   robert: 60,
//   chicken: 68,
//   sasha: 8
// }
var input = ["50 jerome.code.org", "30 ricky.code.com", "60 robert.chicken.com", "8 sasha.chicken.org"]

function getNumVisits(arr) {
  // 2. ================= YOUR WORK HERE ==================
  var obj ={};

  for(var i=0;i<arr.length;i++){
    var arrSpaceSeparated = arr[i].split(" ");
    var arrDotSeparated = arrSpaceSeparated[1].split(".");

    for(var j =0;j<arrDotSeparated.length;j++){
      if(!obj[arrDotSeparated[j]]){
        obj[arrDotSeparated[j]] = parseInt(arrSpaceSeparated[0]);
      }
      else{
        obj[arrDotSeparated[j]]+= parseInt(arrSpaceSeparated[0]);
      }
    }

  }
  return obj;

  // ===================================================
}


// At the root route, send the solution as JSON
  //3. ================= YOUR WORK HERE ==================
  app.get("/", function(req,res){
    return res.json(getNumVisits(input));
  });






  // ===================================================


// Listener
// ===========================================================

// 1. Create server
app.listen(PORT, function(){
  console.log("App listening on PORT " + PORT);
});