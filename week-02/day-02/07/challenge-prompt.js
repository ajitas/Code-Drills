var validNumbers =["0","1","2","3","4","5","6","7","8","9"];
var validOperators =['*','+','-','/'];
var operatorFound = false;
var num1 =[];
var num2 =[];
var operator;
var result = 0;
document.onkeyup = function(event){

    //check if its a digit
   if(validNumbers.indexOf(event.key)>=0){
        if(!operatorFound){
            num1.push(parseInt(event.key));
            document.getElementById("screen").textContent = document.getElementById("screen").textContent + event.key;
        }
        else{
            num2.push(parseInt(event.key));
            document.getElementById("screen").textContent = document.getElementById("screen").textContent + event.key;
        }
   }
   //check if its an operator
   else if(validOperators.indexOf(event.key)>=0)
   {
       if(operatorFound || num1.length == 0){
            document.getElementById("result").textContent = "Please enter a valid key";
       }
       else{
           operatorFound = true;
           operator = event.key;
           document.getElementById("screen").textContent = document.getElementById("screen").textContent +" "+ event.key + " ";
       }
   }

   else if(event.key == "=")
   {
       if(num1.length > 0 && num2.length >0){
            result = calculator(num1, num2, operator);
            document.getElementById("result").textContent = result;
            console.log(result);
       }
       else{
           console.log(event);
            document.getElementById("result").textContent = "Please enter a valid key";
       }    
   }
   //clear the screen and result
   else if(event.key == "c"){
        document.getElementById("result").textContent = "";
        document.getElementById("screen").textContent = "";
        var len1 = num1.length;
        for(var i = 0; i<len1; i++){
            num1.pop();
        }
        var len2 = num2.length;
        for(var i = 0; i<len2; i++){
            num2.pop();
        }
        operatorFound = false;
        result = 0;
        operator = "";
   }
   else if(event.key == "Shift"){}
   else{
       console.log(event);
        document.getElementById("result").textContent = "Please enter a valid key";
   }
    
}

//function to calculate the result
function calculator(num1, num2, operator){
    var firstNum = 0;
    var secondNum = 0;
    var result = 0;
    for(var i = num1.length-1, j = 0;i>=0;i--,j++){
        firstNum = firstNum + parseInt(num1[i])*Math.pow(10,j);
    }
    for(var i = num2.length-1, j = 0;i>=0;i--,j++){
        secondNum = secondNum + parseInt(num2[i])*Math.pow(10,j);
    }
    if(operator == "+"){
        result = firstNum + secondNum;
    }
    else if(operator == "-"){
        result = firstNum - secondNum;
    }
    else if(operator == "*"){
        result = firstNum * secondNum;
    }
    else if(operator == "/"){
        result = firstNum / secondNum;
    }
    return result;
}