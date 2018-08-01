var userResponse;
document.onkeyup = function(event){
    console.log(event.key);
    if(event.key === "h"){
        userResponse = confirm("Do you want to say Hello?");
    }
    if(event.key === "k"){
        if(userResponse === true){
            alert("Hello");
        }
        else{
            alert("No Thanks");
        }
    }
}