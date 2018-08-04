// Section 1 
// Set a variable of userTyped and use get element by id or query selector and set it equal to the element with the id of letterTyped 
var userTyped = $("#letterTyped");

// Set a variable of letterUsed and use get element by id or query selector and set it equal to the element with the id of lastLetter 
var letterUsed = $("#lastLetter");

// create a variable called LetterUsedArray and have it equal and empty array
var LetterUsedArray = [];

// Section 2
// now use the onkey up jquery function and pass it the arguement of event
$(document).on("keyup", function(event){
// now set a variable of userInput equal to the event.key
    var userInput = event.key;

    // use the userTyped variable and the textContent property equal the userInput
    userTyped.textContext = userInput;

    // push the userInput into the letterUsedArray
    LetterUsedArray.push(userInput);


    // use the letterUSed variable and the textContent property plus equal the userInput plus a string ,
    letterUsed.textContext += userInput + ",";

});

    