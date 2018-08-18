// Activity 2


// In this activity, we're creating a function that finds the
// factorial of a number the user gives.

// -------------------------------------------------------
//                   Factorial Function
// -------------------------------------------------------
function factorial(num) {
  // -------------------- Your Code Here --------------------

  var fact =1;
while(num>1){
  fact = fact*num;
  num--;
}
return fact;
  
  
  // --------------------- End Code Area --------------------
}


// This listens for and calls on the `factorial` function with the user input
$(function() {
  $(document).on("click", "button[type=submit]", function(event){
    event.preventDefault();
    
    num = $("input").val().trim();
    $("#output-area").text(factorial(num));

  });
})