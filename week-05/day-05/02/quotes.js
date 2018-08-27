var inquirer = require("inquirer")
var authorQuotes =[{author:"AJ",quote:"Q1"},{author:"HS",quote:"Q2"},{author:"MS",quote:"Q3"},{author:"BS",quote:"Q4"}];

function appStart(){
    inquirer.prompt([{
        type:"list",
        choices:["Add a quote","Display a quote", "Exit"],
        message:"What do you want to do?",
        name:"action"
    }]).then(function(response){
        if(response.action === "Display a quote"){
            var authorArray=[];
            for(var i=0;i< authorQuotes.length; i++)
                authorArray.push(authorQuotes[i].author);
            inquirer.prompt([{
                type:"list",
                choices:authorArray,
                message:"Choose author",
                name:"author"
            }]).then(function(response){
                for(var i=0;i<authorQuotes.length;i++){
                    if(response.author === authorQuotes[i].author)
                        console.log(authorQuotes[i].quote);
                }
                appStart();
            });
        }
        else if(response.action === "Add a quote"){
            inquirer.prompt([{
                type:"input",
                message:"Enter Author",
                name:"author"
            },
            {
                type:"input",
                message:"Enter Quote",
                name:"quote"
            }]).then(function(response){
                var obj = {};
                obj["author"] = response.author;
                obj["quote"] = response.quote;
                authorQuotes.push(obj);
                appStart();
            });
        }

    });
    
}
appStart();