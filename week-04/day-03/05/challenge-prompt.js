
console.log("////////////////////////////// QUESTION 5.1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

// Given an unsorted array of (almost sequential) numbers, return the number that makes the array non-sequential.

//For example, if we were given this array: [5, 2, 4, 6, 1, 3, 8], it would look like this [1, 2, 3, 4, 5, 6, 8] sorted.

//You'll notice that the numbers would be counting up, but for a missing 7. That is the value your function should return
function bubbleSort(unsortedArr) {
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

function missingNumber(arr){
    // =========== code starts here =============
arr = bubbleSort(arr);
for(var i =1;i<arr.length;i++){
  if(arr[i]-arr[i-1]!== 1){
    return arr[i]-1;
  }
}
return -1;
    






    // =========== code ends here ==============
  }
  
console.log(missingNumber([5, 2, 4, 6, 1, 3, 8]));
//expected output = 7 because if we ordered this list, the number seven would be missing