// Activity 4


// We are creating a function that takes in an unsorted array of integers
// and returns a sorted array with all the even numbers first in ascending order
// and all the odd numbers in descending order after the even numbers

// -------------------------------------------------------
//                Helper Functions (Optional)
//
// -------------------- Your Code Here --------------------
function desc_bubbleSort(unsortedArr) {
  // ================= code goes here ===========================
  for(var i =0; i<unsortedArr.length; i++){
      //loop through each element with adjacent element
      for(var j = 0 ;j < unsortedArr.length-i-1; j++){
  
        //compare j and j+1 element 
        if(unsortedArr[j]<unsortedArr[j+1]){
          //swap
          var temp = unsortedArr[j];
          unsortedArr[j] = unsortedArr[j+1];
          unsortedArr[j+1] = temp;
  
          //to tell that we swapped at least once in this iteration
          swap = true;
  
        }
      }
      //if we did not swap even once, we don't need to go further
      if(swap == false)
        break;
      else
        swap = false;
    }
    return unsortedArr;
  }

  function asc_bubbleSort(unsortedArr) {
    // ================= code goes here ===========================
    for(var i =0; i<unsortedArr.length; i++){
        //loop through each element with adjacent element
        for(var j = 0 ;j < unsortedArr.length-i-1; j++){
    
          //compare j and j+1 element 
          if(unsortedArr[j]>unsortedArr[j+1]){
            //swap
            var temp = unsortedArr[j];
            unsortedArr[j] = unsortedArr[j+1];
            unsortedArr[j+1] = temp;
    
            //to tell that we swapped at least once in this iteration
            swap = true;
    
          }
        }
        //if we did not swap even once, we don't need to go further
        if(swap == false)
          break;
        else
          swap = false;
      }
      return unsortedArr;
    }


// --------------------- End Code Area --------------------


// -------------------------------------------------------
//                        Sort Function
// -------------------------------------------------------
function upDownSort(arr) {
  // -------------------- Your Code Here --------------------
var evenArray =[];
var oddArray = [];
for(var i =0;i<arr.length; i++){
  if(arr[i]%2 === 0)
    evenArray.push(arr[i]);
  else
    oddArray.push(arr[i]);  
}

evenArray = asc_bubbleSort(evenArray);
oddArray = desc_bubbleSort(oddArray);

//merge two arrays
var i =0;
while(i<evenArray.length){
  arr[i] = evenArray[i];
  i++;
}
while(i<evenArray.length + oddArray.length){
  arr[i] = oddArray[i-evenArray.length];
  i++;
}

return arr;

  // --------------------- End Code Area --------------------
}


// ------------------------------------------------------------------
console.log("==================== Test 01 ====================");
var testArr1 = [5, 32, 9, 47, 22, 6, 33, 17, 20, 73];
console.log("The following should be [6, 20, 22, 32, 73, 47, 33, 17, 9, 5]");
console.log(upDownSort(testArr1));

// ------------------------------------------------------------------
console.log("==================== Test 02 ====================");
var testArr2 = [44, 32, 6, 88, 12, 28, 20, 8, 10, 24];
console.log("The following should be [6, 8, 10, 12, 20, 24, 28, 32, 44, 88]");
console.log(upDownSort(testArr2));

// ------------------------------------------------------------------
console.log("==================== Test 03 ====================");
var testArr3 = [19, 27, 11, 23, 7, 63, 89, 15, 33, 3];
console.log("The following should be [89, 63, 33, 27, 23, 19, 15, 11, 7, 3]");
console.log(upDownSort(testArr3));