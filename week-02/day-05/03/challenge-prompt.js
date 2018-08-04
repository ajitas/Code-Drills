// Day 05
// Activity 03

// The README.md has instructions for this exercise


// This function should populate our page with the 4 buttons we need
// We will be defining this function right now and invoking it later
function populateButtons() {
  var newButton = $("<button>");
  newButton.attr("id","button-hello");
  newButton.text("Hello");
  $("#buttons-area").append(newButton);

  newButton = $("<button>");
  newButton.attr("id","button-world");
  newButton.text("World");
  $("#buttons-area").append(newButton);

  newButton = $("<button>");
  newButton.attr("id","button-clear");
  newButton.text("Clear");
  $("#buttons-area").append(newButton);
  // End of your code area
}

// This is jQuery shorthand to a document.ready
// This tells our javascript to wait until the page has finished 
// loading before running the code.
$(function () {

  // call on the populateButtons functions we defined above.
  populateButtons();

  // This is the key press listener that saves the key the user pressed.
  // Refer to step 4 on the README
  var buttonArea = document.getElementById("user-button-area");
  var newButton = document.createElement("button");
  buttonArea.appendChild(newButton);
  newButton.setAttribute("id","userButton");
  newButton.append("keyButton");
  document.onkeyup = function(event) {
    newButton.value = newButton.value + event.key;
    // End of your code area
  }

  // One click listener for all our buttons. You're going to have to figure out
  // which button was clicked and handle the logic for that button inside here
  // Refer to step 3 on the README
  $(document).on("click", "button", function (event) {
    if($(this).text() == "Hello" || $(this).text() == "World"){
      $("#output").append($(this).text());
    }
    else if($(this).text() == "Clear"){
      $("#output").empty();
    }
    // End of your code area
  })
  .on("click", "#user-button-area", function(){
    $("#output").empty();
    $("#output").append($("#userButton").val());
    newButton.value="";

  })

})
