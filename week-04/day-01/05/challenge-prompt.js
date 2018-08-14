// Activity 5


// We are creating a function that takes in an unsorted array of integers
// and returns a new array containing only the prime numbers sorted in
// descending order

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

  function isPrime(num){

    for(var i =2;i<num;i++){
      if(num%i === 0)
        return false;
    }
    return true;
  }



// --------------------- End Code Area --------------------


// -------------------------------------------------------
//                        Sort Function
// -------------------------------------------------------
function primeSort(arr) {
  // -------------------- Your Code Here --------------------
  var primeArray =[];
for(var i =0;i<arr.length ; i++){
  if(isPrime(arr[i])){
    primeArray.push(arr[i]);
  }
}
return desc_bubbleSort(primeArray);




  // --------------------- End Code Area --------------------
}


// ------------------------------------------------------------------
console.log("==================== Test 01 ====================");
var testArr1 = [5, 32, 9, 47, 22, 6, 33, 17, 20, 73];
console.log("The following should be [73, 47, 17, 5]");
console.log(primeSort(testArr1));

// ------------------------------------------------------------------
console.log("==================== Test 02 ====================");
var testArr2 = [83, 6, 13, 15, 27, 19, 103, 59, 42, 4];
console.log("The following should be [103, 83, 59, 19, 13]");
console.log(primeSort(testArr2));

// ------------------------------------------------------------------
console.log("==================== Test 03 ====================");
var testArr3 = [6, 81, 36, 45, 82, 21, 8, 22, 10, 15];
console.log("The following should be []");
console.log(primeSort(testArr3));