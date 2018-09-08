// SERVE UP INDEX AND ADD.HTML IN THIS FILE AT THE PORT OF YOUR CHOICE.
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();

var PORT = 8080;

// // Sets up the Express app to handle data parsing
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.static(__dirname + '/public' ));

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/add", function(req,res){
    res.sendFile(path.join(__dirname, "public/add.html"));
});
app.listen(PORT, function(){
    console.log("App listening on port: "+PORT);
})