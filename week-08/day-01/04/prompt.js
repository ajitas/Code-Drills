//  YOUR WORK HERE

function totalProductivity(arr,num){
    for(var i =0;i<arr.length;i++){
        var prod=0;
        if(arr[i][0] === num){
            prod=prod+arr[i][1];
            for(var j=0;j<arr[i][2].length;j++)
                prod= prod+ totalProductivity(arr,arr[i][2][j]);

        break;
        }
    }
    return prod;
}

console.log(totalProductivity([[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1));