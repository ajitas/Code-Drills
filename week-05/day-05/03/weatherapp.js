var request = require("request");
var inquirer = require("inquirer");

inquirer.prompt([{
    type:"input",
    message:"Enter city name",
    name:"city"
}]).then(function(response){
    if(response.city){

        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+response.city+"&units=Imperial&appid=6fcb2a8ce52f984a48d4681b5757617f";
    request(queryURL, function(error, response, body) {
    
      if (!error && response.statusCode === 200) {
          
         console.log("City: "+JSON.parse(body).name);
         console.log("Country: "+JSON.parse(body).sys.country);
         console.log("Temp: "+JSON.parse(body).main.temp);
          
      }
    });
    }
});
