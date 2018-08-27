var request = require("request");
var zip = process.argv[2];
if(zip){
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?zip="+zip+"&units=Imperial&appid=6fcb2a8ce52f984a48d4681b5757617f";
    console.log(queryURL)
request(queryURL, function(error, response, body) {

  if (!error && response.statusCode === 200) {
  	
      for(var i =0;i<JSON.parse(body).list.length;i++){
          console.log(JSON.parse(body).list[i].dt_txt+" "+JSON.parse(body).list[i].main.temp)
      }

  	
  }
});
}