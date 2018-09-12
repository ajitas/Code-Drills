//  YOUR WORK HERE

function pyramid(num){
    for(var i =1;i<=num;i++){
        var spaces = "";
        var spacetimes = num-i;

        //gives (num-i)*spaces
        while(spacetimes){
            spaces=spaces+" ";
            spacetimes--;
        }

        //gives i*"#"+"#"+i*"#"
        var hashes="#";
        var hashtimes = i-1;
        while(hashtimes>0){
            hashes="#"+hashes+"#";
            hashtimes--;
        }
        console.log("\`"+ spaces + hashes + spaces + "\`");
        //console.log("\`"+ num-1* spaces + 0*"#"+"#"+0*"#"+ num-1* spaces+ "\`")
        //console.log("\`"+ num-2* spaces + 1*"#"+"#"+1*"#"+ num-2* spaces+ "\`")
        //console.log("\`"+ num-3* spaces + 2*"#"+"#"+2*"#"+ num-3* spaces+ "\`")
    }
}

pyramid(8);