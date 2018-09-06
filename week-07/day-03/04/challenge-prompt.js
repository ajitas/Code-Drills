var express = require("express");
var app = express();
var PORT = 8080;

function evenLetters(word){
    var alphabets = "abcdefghijklmnopqrstuvwxyz";
    var obj ={};
    for(var i=0;i<word.length;i++){
        if(!obj[word[i]])
            obj[word[i]] = 1;
        else
            obj[word[i]]+= 1;
    }
    for(var i =0;i<alphabets.length;i++){
        if(obj[alphabets[i]]){
            if(obj[alphabets[i]]%2 === 1){
                alphabets = alphabets.slice(0,i)+ alphabets.slice(i+1);
                i--;
            }
        }
    }
    return alphabets;
}

app.get("/:word",function(req,res){
    var word = req.params.word;
    res.json(evenLetters(word));
});

app.listen(PORT,function(){
    console.log("App listening on port: "+ PORT);
});