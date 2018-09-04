// Merging Sorted Arrays



// The `mergeSorted` function takes in two sorted arrays and returns a new 
// sorted array containing all the elements of the two argument arrays
function mergeSorted(arr1, arr2) {
  // -------------------- Your Code Here --------------------
var i = 0;
var j =0;
var resultArray=[];

while(i<arr1.length && j<arr2.length){
  if(arr1[i] <= arr2[j]){
    resultArray.push(arr1[i]);
    i++;
  }
  else{
    resultArray.push(arr2[j]);
    j++;
  }
}
if(i === arr1.length){
  while(j<arr2.length){
    resultArray.push(arr2[j]);
    j++;
  }
}
if(j === arr2.length){
  while(i<arr1.length){
    resultArray.push(arr1[i]);
    i++;
  }
}

return resultArray;






  // --------------------- End Code Area --------------------
}

// Export the `mergedSorted` 
module.exports = mergeSorted;
