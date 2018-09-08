// Rate a restaurant server

// Create our server and manage our routes
var express = require("express");
// More easily interact with the body of requests
var bodyParser = require("body-parser")
// Create relative paths to our htmls and public files
var path = require("path")
// Make queries to our mySQL database
var mysql = require("mysql")



// Define the connection parameters to the sql server
// -------------------- Your Code Here --------------------
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "restaurantsDB"
});



// --------------------- End Code Area --------------------



// Connect to the server we just defined
// -------------------- Your Code Here --------------------
// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
});



// --------------------- End Code Area --------------------



// Initialize express and set our port to 3002
var app = express()
var PORT = 3002
// Make our app use bodyparser to access our requests
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//Serve up static assets from public
app.use(express.static(__dirname + "/public"));



//======================== HTML ========================
// Serve up the index.html and add.html pages
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.get("/add", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/add.html"))
})
// ===================================================



// ====================== API ==========================
// Provide API routes for our front end webpage to interact with our database

//Get all restaurants
// -------------------- Your Code Here --------------------
app.get("/api/restaurants/all", function(req,res){
  connection.query("select * from restaurants", function(err,data){
    if(err) throw err;
    return res.json(data);
  })
})



// --------------------- End Code Area --------------------

//Create new restaurant
// -------------------- Your Code Here --------------------
app.post("/api/resturants/add", function(req,res){
  connection.query("insert into restaurants set ?",
  {
    restaurant_name:req.body.name,
    restaurant_link:req.body.link,
    restaurant_img:req.body.image,
    rating:parseInt(req.body.rating)
  },
  function(req,res){});
})



// --------------------- End Code Area --------------------

//Update restaurant rating
// -------------------- Your Code Here --------------------
app.put("/api/resturants/:id/rating/:val", function(req,res){
  connection.query("update restaurants set ? where ?",
  [{
    rating:parseInt(req.params.val)
  },
  {
    restaurant_id: parseInt(req.params.id)
  }],
  function(req,res){});
})



// --------------------- End Code Area --------------------

// ===================================================




// Set up a listener on the designated port for our app
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT)
})

