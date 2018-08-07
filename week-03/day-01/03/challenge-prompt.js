// Day 01
// Acitivity 03


console.log("==================== Question 01 ====================");
// Create a timer that creates an alert that says "Question 1" after 5 seconds
setTimeout(function(){
    alert("Question 1");
},5000);



console.log("==================== Question 02 ====================");
// Create a timer that creates an alert that says "Question 2" after 15 seconds
var alertQuestion2 = setTimeout(function(){
    alert("Question 2");
},15 * 1000);



// Remove the timer you just made for Question 2
clearTimeout(alertQuestion2);


console.log("==================== Question 03 ====================");
// Create a timer that creates an alert that says "Question 3 part 1" after 15 seconds
var alertQuestion31 = setTimeout(function(){
    alert("Question 3 part 1");
},15 * 1000);


// Create a timer that creates an alert that says "Question 3 part 2" after 16 seconds
var alertQuestion32 = setTimeout(function(){
    alert("Question 3 part 2");
},16 * 1000);


console.log("==================== Question 04 ====================");
// Remove the timer from Question 3 part 1
clearTimeout(alertQuestion31);


console.log("==================== Question 05 ====================");
// Create a timer that plays a sound after 11 seconds and console logs "Question 5 Completed!"
setTimeout(function(){
    document.getElementById("audio1").play();
    console.log("Question 5 Completed!");
},11 * 1000);

