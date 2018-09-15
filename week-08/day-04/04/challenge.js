// Complete your work in the function below.

function spiralist(n) {
    var rows= n;
    var cols =n;
    var resultMatrix=[];
  
    if(rows ===0){
      return [[]];
    }
    if(rows ===1){
        resultMatrix =[[1]];
        return resultMatrix;
    }

    for(var i=0;i<rows;i++){
        resultMatrix[i]=[];
        for(var j=0;j<cols;j++){
            resultMatrix[i][j] = 1;
        }
    }
    
   //cf is columnforward, cb is columnbackward. ru is rowup, rd is rowdown
   var j = Math.ceil(rows/2);
   var count =1;
   for(var i =0; i<j; i++){
    for(var cf=0+i; cf<cols-i-1;cf++){
        resultMatrix[0+i][cf]=count;
        count++;
    }
    
    for(var rd=0+i; rd<rows-i-1;rd++){
        resultMatrix[rd][cols-1-i]=count;
        count++;
    }
    
    for(var cb=cols-1-i; cb>=0+i+1;cb--){
        resultMatrix[rows-1-i][cb]=count;
        count++;
    }
  
    for(var ru=rows-1-i;ru>=0+i+1;ru--){
        resultMatrix[ru][0+i]=count;
        count++;
    }
   }
   if(rows === cols && rows%2===1)
    resultMatrix[j-1][j-1]=count;
  
   return resultMatrix;
}

console.log(0, spiralist(0))

console.log(1, spiralist(1))

console.log(2, spiralist(2))

console.log(3, spiralist(3))

console.log(9, spiralist(9))