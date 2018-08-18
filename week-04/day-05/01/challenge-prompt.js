// Activity 1


// In this activity, we're creating a function that sings the
// "99 Bottles of Beer on the Wall song"

// -------------------------------------------------------
//                Helper Functions (Optional)
//
// -------------------- Your Code Here --------------------





// --------------------- End Code Area --------------------


// -------------------------------------------------------
//                  Singing 99-Bottles Function
// -------------------------------------------------------
function sing(maxBottles) {
  // -------------------- Your Code Here --------------------

  while(maxBottles){
    $("#output-area").append("<br>",maxBottles,(maxBottles>1?" bottles":" bottle"), " of beer on the wall. ", maxBottles ,(maxBottles>1?" bottles":" bottle")," of beer." ,
    "Take one down, pass it around, ",(maxBottles > 1?maxBottles-1:""),((maxBottles-1>1)?" bottles":((maxBottles-1 == 1)?" bottle":" no more bottles"))," of beer on the wall!");
    maxBottles--;
  }
  


  // --------------------- End Code Area --------------------
}


// This sets up a listener that calls on the `sing` function with the user input
$(function() {
  $(document).on("click", "button[type=submit]", function(event){
    event.preventDefault();

    num = $("input").val().trim();
    $("#output-area").empty();
    sing(num);

  });
})