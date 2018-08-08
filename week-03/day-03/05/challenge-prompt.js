// Lets build another bubble sort with a while loop instead of nested for loops

// Define a boolean outside your while loop to track if an element has been swapped

// the while loop should contain the for loop that iterates through the array and 
// continue until you've been able to iterate through the array without swapping 
// any elements


function bubbleSortTwo(arr) {
    // ================= code goes here ===========================
    var swapped = false;
    var i = 0;
    while(i<arr.length){

        if(swapped == false){
            for(var j = 0;j<arr.length-i-1;j++){
                if(arr[j]<arr[j+1]){
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    swapped = true;
                }
            }
        }
        if(swapped == false)
            break;
        else{
            i++;
            swapped = false;
        }
    }

    return arr;









    
    // ============================================================
}


var age = [34, 23, 3, 76, 20, 84, 18, 9];
var newAge = bubbleSortTwo(age);
console.log(newAge)
