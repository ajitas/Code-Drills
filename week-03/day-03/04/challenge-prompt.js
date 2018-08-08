// build a function that uses bubble sort to sort an array from
// highest value to lowest value and returns the new sorted array

function bubbleSort(unsortedArr) {
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








// ============================================================

var testArray = [34, 23, 3, 76, 20, 84, 18, 9];
testArray = bubbleSort(testArray);
console.log(testArray);