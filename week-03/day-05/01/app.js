/* 
	Before you begin install this chrome extennsion: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en 
	make sure the extension is enabled, will be a green icon not red
*/

/* 
	add https://funwithajax.herokuapp.com/api/* to intercepted URLs and patterns 
*/

/*
	Create a ready event to make all function available after the document is loaded
*/



$(document).ready(function() {

	/*///////////// HEROES ACTIVITY ///////////////////*/

		/* Base query url https://funwithajax.herokuapp.com/api/ */

      /* 
      1. 
				Create a function call `getHeroes`. Put the closing bracket just before this function is invoked (towards the bottom of this file). 
				
			*/

			function getHeroes(){

				//create a varialbe named `cors` that has the value `https://cors-anywhere.herokuapp.com/`
				//Because our request to this server is coming from a different app, there is a risk of running into a `cross-origin` error. Prepending the above url to our query url will handle this error for us.
				var cors = "https://cors-anywhere.herokuapp.com/";
				
				//create a variable named `baseURL` with the value `https://funwithajax.herokuapp.com/api`
				var baseURL = "https://funwithajax.herokuapp.com/api";

				//create a variable with the name `query` with the value `"?q=heroes"`
				var query = "?q=heroes";

				console.log(cors+baseURL+query);

				//Using ajax make a `GET` request to:
          		//`cors` plus `baseURL` plus `query`
				$.ajax({
					url: cors+baseURL+query,
					method: "GET"
				}).then(function(response){

					//console.log` the response
					console.log(response);

					//add class `hero-BKG` to `<body>` 
					$("body").attr("class","hero-BKG");

					//add class `blue` to the `#wrap` 
					$("#wrap").attr("class","blue");

					//remove class `weather-wrap` and `music` from `#content`
					$("#content").removeClass("weather-wrap");
					$("#content").removeClass("music");
					//add clas heroes to #content
					$("#content").attr("class","heroes");

					//remove all elements of #content container
					$("#content").empty();

					//create a `div` and store it to a variable called `row`
					//add a class of `row` to the `row div` 
					var row = $("<div>").attr("class","row");

					//for each squad in the response: 
					for(var i =0;i<response.length;i++){

						//create a `div` and store it to a variable called `col`
						//add classes `col-sm-12 col-md-6 col-lg-6` to the `col div` 
						var col = $("<div>").attr("class","col-sm-12 col-md-6 col-lg-6");

						//create a `div` and store it to a variable called `header`
						//add a class of `header` to the `header`
						var header = $("<div>").attr("class","header");

						//add a `h2` to the `header` with the currennt squads name as the text
						//append `header` to `col` 
						header.append("<h2>").text(response[i].squadName);
						col.append(header);

						// create a `div` and store it to a variable called `characters`
						//add a class of `characters` to the `characters div` 
						var characters = $("<div>").attr("class","characters");

						//for each member in the current squad:
						for(var j = 0;j<response[i].members.length; j++){
							//create a `div` and store it to a variable called `hero`
							//add a class of `hero` to the `hero div` 
							  
							  var hero = $("<div>").attr("class","hero");

							//creat a `div` and store it to a variable called `imgWrap`
							  //add a class of `img-wrap` to the `imgWrap div` 
							  var imgWrap = $("<div>").attr("class","img-wrap");

							//  create a `img` and store it to a variable called `image`
							//  add a class of `hero-image` to the `image div`
							//  add an attribute for `source` and the value being the current members image 

							var image = $("<img>").attr("class","hero-image").attr("src",response[i].members[j].image);

							//append `image` to `imgWrap` 
							imgWrap.append(image);

							//create a `p` and store it to a variable called `name`
							//add text of the current member's name to the `name div`
							  
							var name = $("<p>").text(response[i].members[j].name);

							//create a `p` and store it to a variable called `power`
							//add text that is the current members LAST listed power to the `power div`
							//example : sleepig, eating, saving the world – saving the world would be the LAST listed power 
							var power = $("<p>").text(response[i].members[j].powers[response[i].members[j].powers.length -1]);
						
							//append the `imgWrap`, `name`, and `power` to `hero`
							//append `hero` to `characters` 
							hero.append(imgWrap,name,power)  ;
							characters.append(hero);
						}

						//inside the first loop, but outside the second:
						//append `characters` to `col`
				  		//append `col` to `row`
						col.append(characters);
						row.append(col);
					}

					//outside the loops 
					//append `row` to `#content` 
					$("#content").append(row);  

				});
			}

getHeroes()
        /* 
        12.
        BONUS Split these actions into multuple functions */
        
});