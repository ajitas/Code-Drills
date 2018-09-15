// You asked for the challenge...

var input = [ 
  [3, 0, 8, 4], 
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0] 
]

var input2 = [ 
  [23, 55, 28, 14], 
  [12, 64, 55, 67],
  [65, 32, 26, 53],
  [70, 36, 61, 80] 
]

function findMax(arr,row,col){
  var maxrow = Number.MIN_VALUE;
  var maxcol = Number.MIN_VALUE;
  //find max in row row
  for(var i=0;i<arr[row].length;i++){
    if(maxrow<arr[row][i]){
      maxrow = arr[row][i];
    }
  }
  for(var i=0;i<arr.length;i++){
    if(maxcol<arr[i][col]){
      maxcol = arr[i][col];
    }
  }
  return [maxrow,maxcol];
}

function skyline(arr) {
  var sum =0;
  for(var i=0;i<arr.length;i++){
    for(j=0;j<arr[i].length;j++){
      var maxrow = findMax(arr,i,j)[0];
      var maxcol = findMax(arr,i,j)[1];
      if(!(maxrow === arr[i][j] || maxcol === arr[i][j])){
        sum+= Math.min(maxrow,maxcol)-1-arr[i][j];
        console.log(sum)
        arr[i][j]=Math.min(maxrow,maxcol)-1;
      }
      console.log(arr)
    }
    
  }
  return sum;
}


console.log(skyline(input)) //35
console.log(skyline(input2)) // 268