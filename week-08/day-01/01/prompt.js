//  YOUR WORK HERE

function addalldigits(num){
    var sum =0;
    if(num>=0 && num<=9)
        return num;
    while(num>0){
        sum = sum+num%10;
        num=Math.floor(num/10);
    }
    return addalldigits(sum);
}

console.log(addalldigits(89657));