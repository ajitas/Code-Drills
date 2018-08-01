var inputArray =[];
document.onkeyup = function(event){

    if(event.keyCode>=65 && event.keyCode<=90){
        document.getElementById("input-array").textContent = "";
        inputArray.push(event.key);
        document.getElementById("user-input").textContent = event.key;
        document.getElementById("input-array").textContent = inputArray[0];
        for(var i = 1; i < inputArray.length; i++)
        {
            document.getElementById("input-array").textContent =  document.getElementById("input-array").textContent + ',' + inputArray[i]; 
        }
    }
    else{
        document.getElementById("user-input").textContent = "Please press a valid letter";
    }
    
}