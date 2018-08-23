fs = require("fs");
var quotes = "";
for(var i =2;i<process.argv.length;i++){
    quotes= quotes+ process.argv[i] + " ";
}
var quotesArray = quotes.split(" said ");
console.log(quotesArray);
fs.appendFile("quotes.txt","; \""+quotesArray[1].trim()+"\""+"-"+quotesArray[0].trim(),function(error){
    if(error)
        console.log(error);
});