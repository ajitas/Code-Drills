// Activity 6

// creating a variable that references our database, so we don't have to type
// it out every time
var database = firebase.database();

// Document.ready shorthand
$(function() {

  // -------------------- Your Code Here --------------------
  //when a new message is submitted
  database.ref("/posts").on("child_added", function(snapshot){

    //grab the value for key "message" from snapshot
    console.log(snapshot.val().message);
    //display it in the chat-display
    $("#chat-display").append(snapshot.val().message,"<br>");

  },function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  //when submit button is clicked
  $("#chat-submit").on("click", function(event){

    //prevent refresh
    event.preventDefault();
    //grab message from chat-input
    var chatInput = $("#chat-input").val();
    //go to the "posts" child of the database and create a reference
    var postsRef = database.ref("/posts");
    //create a reference to the newly pushed child which has a unique identifier
    var newPostRef = postsRef.push({
      message:chatInput
    });
    //clear the chat-input
    $("#chat-input").val("");

  });


  
  
 

  // --------------------- End Code Area --------------------

})

