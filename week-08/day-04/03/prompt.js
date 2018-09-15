// YOUR WORK HERE
// `"aabbbccdddddeefggggg"`

// You will need to return `[[2,4], [7,11], [15,19]]`.


function repeatingCharsIndexArray(str){
    var start =0;
    var end =0;
    var result=[];
    for(var i =0;i<str.length-1;i++){
        if(str[i]===str[i+1])
            end=i+1;
        else{
            if(end-start>=2){
                result.push([start,end])
            }
            start=i+1;
            end=i+1;
        }
    }
    if(end-start>=2){
        result.push([start,end])
    }

    return result;
}

console.log(repeatingCharsIndexArray("aabbbccdddddeefggggg"));

