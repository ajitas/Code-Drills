// Your work here
function findMissing(arr){

    var result=[];
    arr.sort(function(a,b){
        return a-b;
    });

    for(var i=1;i<arr.length;i++){
        if(arr[i]-arr[i-1]>1){
            var num =arr[i-1]+1;
            while(num<arr[i]){
                result.push(num);
                num++;
            }
        }
    }
    return result;
}

console.log(findMissing([9,7,5,3,11,14]));
