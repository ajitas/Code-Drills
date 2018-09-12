//  YOUR WORK HERE

function createSubArray(arr,num){
    var resultarray=[];
    var subArray=[];
    for(var i =0;i<arr.length;i++){
        subArray.push(arr[i]);
        if((i+1)%num ===0){
            resultarray.push(subArray);
            subArray=[];
        }

    }
    if(subArray.length>0)
        resultarray.push(subArray);
    return resultarray;
}

console.log(createSubArray([2,4,7,3,1,7,9,4,8,0,4,7,9,3,5,5,6,3,2,2,2,2,1],4))