//  YOUR WORK HERE

function createStairs(num){
    if(num>0)
        console.log("#");
    for(var i =1;i<num;i++){
        var str="#";
        var j =i;
        while(j>0){
            str=str+"##";
            j--;
        }
        console.log(str);
    }
}

createStairs(8);