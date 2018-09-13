// Product of all other numbers


// `otherProduct` takes in an array of numbers and returns a
// new array where each element is the product of multiplying
// all the numbers of the argument array except for the element
// at the index of the current element
function otherProduct (arr) {
  // -------------------- Your Code Here --------------------
    if(arr.length<2)
      console.log("Getting the product of numbers at other indices requires at least 2 numbers");
  
    var productsOfAllIntsExceptAtIndex=[];
    
    var productSoFar=1;
    for(var i =0;i<arr.length;i++){
      productsOfAllIntsExceptAtIndex[i]=productSoFar;
      productSoFar*=arr[i];
    }
  
    productSoFar=1;
    for(var i =arr.length-1;i>=0;i--){
      productsOfAllIntsExceptAtIndex[i]*=productSoFar;
      productSoFar*=arr[i];
    }
    return productsOfAllIntsExceptAtIndex;



  // -------------------- End Code Area ---------------------
}

// Should return [ 40, 200, 80, 100 ]
console.log(otherProduct([10, 2, 5, 4]))

// Should return [ 60, 40, 30, 24 ]
console.log(otherProduct([2, 3, 4, 5]))

// Should return [ 2, 1 ]
console.log(otherProduct([1, 2]))

// Should return [ 672, 84, 224, 168, 96 ]
console.log(otherProduct([1, 8, 3, 4, 7]))
