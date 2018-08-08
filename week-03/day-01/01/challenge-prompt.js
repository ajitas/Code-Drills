// Day 01
// Activity 01


// wait for the DOM to finish loading (document.ready)
$(document).ready(function(){

  $("#showinfo").on("click", function(){

    console.log("triggering click");
    $("#userinfo").submit(function(e){
      return false;
    });

    var firstName = $("#firstname").val();
    var lastName = $("#lastname").val();
    var occupation = $("#occupation").val();
    var city = $("#city").val();
    var state = $("#state").val();

    $("#userinfo").find("input[type=text], textarea").val("");

    var displayName = $("<div id='display-name'></div>")
    var displayOccupation = $("<div id='display-occupation'></div>")
    var location = $("<div id='location'></div>")

    $("#display-info > div").remove();
    $("#display-info").append(displayName);
    $("#display-info").append(displayOccupation);
    $("#display-info").append(location);

    displayName.html("<h2>" + firstName + " " + lastName + "</h2>");
    displayOccupation.html("<h4>" + occupation + "</h4>");
    location.html("<h4>" + city + " " + state + "</h4>");
  });

});


  // Create a click listener for the submit button


    // stop the default behavior of the submit button



    // pull the values off the user input form and store them in seperate variables



    // clear the form after we're done storing the values



    // generate the divs needed to display the user data and put the values 
    // we stored from the form inside the divs



    // empty the display area and display the divs we just created in the display area


