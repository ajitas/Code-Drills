// Spiral iteration through a matrix


// This function takes in a `m` x `n` matrix represented as an array 
// of `m` sub-arrays, each of which contain `n` elements and returns
// all the elements of the matrix starting with the element in the
// top left and clockwise spiraling inward
function spiralIter(matrix) {
  // -------------------- Your Code Here --------------------

  var rows= matrix.length;
  var resultarr=[];

  if(rows ===0){
    return resultarr;
  }
  if(rows ===1){
    return matrix[0];
  }
  
  var cols= matrix[0].length;
  if(cols ===1){
    for(var i=0;i<matrix.length;i++){
      resultarr.push(matrix[i][0]);
    }
    return resultarr;
  }
 //cf is columnforward, cb is columnbackward. ru is rowup, rd is rowdown
 var j = Math.min(Math.ceil(rows/2),Math.ceil(cols/2));
 for(var i =0; i<j; i++){

  for(var cf=0+i; cf<cols-i-1;cf++)
    resultarr.push(matrix[0+i][cf])
  
  for(var rd=0+i; rd<rows-i-1;rd++)
    resultarr.push(matrix[rd][cols-1-i])
  
  for(var cb=cols-1-i; cb>=0+i+1;cb--)
    resultarr.push(matrix[rows-1-i][cb])

  for(var ru=rows-1-i;ru>=0+i+1;ru--)
    resultarr.push(matrix[ru][0+i])
 }
 if(rows === cols && rows%2===1)
    resultarr.push(matrix[j-1][j-1])

 return resultarr;
  // -------------------- End Code Area ---------------------
}


// This export is for testing the function
module.exports = spiralIter;