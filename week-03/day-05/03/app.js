$(document).ready(function() {

/*///////////// MUSIC ACTIVITY ///////////////////*/
	
	/* Base query url https://funwithajax.herokuapp.com/api/ */

		/* Base query url https://funwithajax.herokuapp.com/api/ */



		//    Create a function call `getMusic` 
        //    The function is already invoked at the end of this file.
		//    close this function just before it is invoked
		   function getMusic(){

			//create a varialbe named `cors` that has the value `https://cors-anywhere.herokuapp.com/`
			var cors = "https://cors-anywhere.herokuapp.com/";

			//create a variable named `baseURL` with the value `https://funwithajax.herokuapp.com/api`
			var baseURL = "https://funwithajax.herokuapp.com/api";

			//create a variable with the name `query` with the value `""`
			var query = "?q=music&t=havana";

			//create a variable with the name `apiKey` with the value `&apikey=i7_iHnA2g-3d`
			var apiKey = "&apikey=i7_iHnA2g-3d";

			// Using ajax make a `GET` request to:
			// `cors` plus `baseURL` plus `query` plus `apiKey`
			// Close your promise (.then()) just before you close the function. We will be writing the rest of our code within the promise, ensuring that all this logic happens only once we've received a return from the API.
			$.ajax({
				url: cors + baseURL + query + apiKey,
				method: "GET"
			}).then(function(response){

				console.log("Results: ",response);

				//remove class `heroes` and `weather` from `#container`
				$("#container").removeClass("heroes");
				$("#container").removeClass("weather");

				//add class `music-BKG` to `body` 
				$("body").attr("class","music-BKG");

				//remove class `blue` to the `#wrap`
				$("#wrap").removeClass("blue"); 

				//remove class `weather-wrap` and `heroes` from `#content`
				$("#content").removeClass("weather-wrap").removeClass("heroes");

				//add class `music` to `#content`
				$("#content").attr("class","music");

				//Before doing anything with the data make sure that you remove any elements inside the `#contents` container 
				$("#content").empty();

				//get the `first item` from the `response`
				//store it to a variable with the name `track`
				var track = response.tracks.items[0];

				//create a `div` store it in a variable named `trackWrap`
				//add a class of `track-wrap` to `trackWrap div`
				var trackWrap = $("<div>").attr("class","track-wrap");

				//create a `div` store it in a variable named `trackCol1`
				//add classes  `"col-xs-12 col-sm-12 col-md-6 col-lg-6 t-col-1"` to the `trackCol1 div`
				var trackCol1 = $("<div>").attr("class","col-xs-12 col-sm-12 col-md-6 col-lg-6 t-col-1");

				//create a `h2` store it to a variable named `heading` 
				//add text the `heading` with the value of the `track` name
				var heading = $("<h2>").text(track.name);

				//create a variable named `artistURL` with the value of  the `track` firts artists spotify external url 
				var artistURL = track.artists[0].external_urls.spotify;

				// 	create an image and store it to a variable named `img`
				// 	add a class of `track-img` to `img div`
				// 	get the album image url with the height: 300
				//  assign it to the `img` source attribute
				var img = $("<img>").attr("class","track-img");
				img.attr("src",track.album.images[1].url);

				trackCol1.append(heading,img);
				// get the first artist name
				//var artistName = $("<h4>").text(track.artists[0].name);
				var artistName1 = track.artists[0].name;
				// external spotify URL for artist
				var artistName = $("<h4>").html("<a target='_blank' href='"+artistURL+"'>"+artistName1+"</a>");

				var trackCol2 = $("<div>").attr("class","col-xs-12 col-sm-12 col-md-6 col-lg-6 t-col-2");

				// get release date
				var relDate = $("<p>").text(track.album.release_date);

				// get album name
				var albumName = $("<p>").text(track.album.name);

				trackCol2.append(artistName,albumName,relDate);


				trackWrap.append(trackCol1,trackCol2);
				
				
				
				// get external spotify URL for album

				// button to listen in new tab 
				// eternal spotify URL for song
				var trackLink = track.external_urls.spotify;
				var trackButton = $("<button>");
				trackButton.attr("class","track-btn");
				trackButton.text("LISTEN");
				trackButton.attr("href",trackLink);

				trackCol2.append(trackButton);
				$("#content").append(trackWrap);

				$("button").on("click", function(e){
					e.preventDefault();

					window.open($(this).attr("href"), '_blank');
				});

				


			}

			);

		   }

getMusic()

});