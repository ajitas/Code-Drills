// Declare our dependencies
var express= require("express");
var path = require("path");

// Setting up express
var app = express();
var PORT = 3005;

app.use(express.static("public"));
// Declaring our initial students
var students = [
  {
    id: 0,
    name: "Harry Potter",
    house: "Gryffindor",
    img: "http://www.stickpng.com/assets/images/580b57fbd9996e24bc43bd6c.png",
    skills: []
  },{
    id: 1,
    name: "Luna Lovegood",
    house: "Ravenclaw",
    img: "http://purepng.com/public/uploaads/large/purepng.com-luna-with-magical-wandharry-potterjkrollingginnyscarypremadeswordmagicspellronaldronnyweaselyrongeorgehermioneluna-241519480015g9oot.png",
    skills: []
  },{
    id: 2,
    name: "Hermione Granger",
    house: "Gryffindor",
    img: "https://vignette.wikia.nocookie.net/polski-dubbing/images/3/3b/Hermiona_Granger.png/revision/latest?cb=20160505205558&path-prefix=pl",
    skills: []
  }
]


// Serving the HTML
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/add.html"));
});

app.get("/learn", function(req, res) {
  res.sendFile(path.join(__dirname, "learn.html"));
});

// API ROUTES
// ================== YOUR WORK HERE ==============
app.post("/api/students/add", function(req,res){
  var newStudent = {
    id:students.length,
    name:req.body.name,
    house:req.body.house,
    img:rq.body.img,
    skills:[]
  };
  students.push(newStudent);
});
  
app.get("/api/students/:id",function(req,res){
  var id = parseInt(req.params.id);
  for(var i =0;i<students.length;i++){
    if(students[i]){
      if(id === students[i].id){
        return res.json(students[i]);
      }
    }
  }
  return res.json(null);
});

app.get("/api/students/all", function(req,res){
  return res.json(students);
});

app.put("/api/students/:id/learn", function(req,res){
  var id = parseInt(req.params.id);
  for(var i =0;i<students.length;i++){
    if(students[i]){
      if(id === students[i].id){
        if (!students[i].skills.includes(req.body.skills)){
          students[i].skills.push(req.body.skills);
        }
      }
    }
  }
});

app.delete("/api/students/:id", function(req,res){
  var id = parseInt(req.params.id);
  for(var i =0;i<students.length;i++){
    if(students[i]){
      if(id === students[i].id){
        students.splice(i, 1);
        break;
      }
    }
  }
});
// ================================================



// Start the server listening on the designated port
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});