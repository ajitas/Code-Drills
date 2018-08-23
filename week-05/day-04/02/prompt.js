// ======== You are given NOTHING to start with 😱 ========
var fs = require("fs");
var quotesObj={};
var name="";
for(var i =2;i<process.argv.length;i++){
    name = name + process.argv[i]+ " ";
}
name=name.trim();
console.log(name);
fs.readFile("quotes.txt","utf8",function(error,data){
    if(error)
        console.log(error);
    var quotes = data.split(";");
    for(var i =0;i<quotes.length;i++){
        var eachQuote = quotes[i].split("-");
        quotesObj[eachQuote[1]]= eachQuote[0];
        
    }
console.log(quotesObj);

for(var prop in quotesObj){
    if(prop === name)
        console.log(quotesObj[name]);
}
});