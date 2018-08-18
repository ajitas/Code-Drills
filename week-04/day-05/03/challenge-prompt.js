// Activity 3


// In this activity, we're creating a function that finds the
// factors of a number the user gives.

function isDivisible(num,i){
  if(num % i === 0)
    return true;
    
  return false;
}
// -------------------------------------------------------
//                   Find Factor Function
// -------------------------------------------------------
function factor(num) {
  // -------------------- Your Code Here --------------------

  var resultArr = [1];
  for(var i=2;i<num;i++){
    if(isDivisible(num,i)){
      resultArr.push(i);
    }
  }
  resultArr.push(num);
  return resultArr;

  
  
  // --------------------- End Code Area --------------------
}


// This listens for and calls on the `factorial` function with the user input
$(function() {
  $(document).on("click", "button[type=submit]", function(event){
    event.preventDefault();
    
    num = $("input").val().trim();
    $("#output-area").text(factor(num));

  });
})