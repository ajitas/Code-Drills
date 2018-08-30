// Defining the card constructor function
//
// -------------------- Your Code Here --------------------
var Card = function(number) {

    this.number = number;
    this.print = function(){
        console.log(this.number);
    };
};

// --------------------- End Code Area --------------------



// Defining the deck constructor function
//
// -------------------- Your Code Here --------------------
var Deck = function(cards){
    this.cards=cards;
    this.count = function(){
        return this.cards.length;
    };
    this.draw = function(){
        return this.cards.pop();
    };
    this.shuffle = function(){
        for(var i = this.cards.length-1;i>=0;i--){
            var rand = Math.floor(Math.random()*(i+1));
            var temp = this.cards[rand];
            this.cards[rand] = this.cards[i];
            this.cards[i] = temp;
        }
    };
    this.add = function(card){
        this.cards.push(card);
        this.shuffle();
    };

};





// --------------------- End Code Area --------------------



// Export your two constructor functions
//
// -------------------- Your Code Here --------------------
module.exports = {Card,Deck};



// --------------------- End Code Area --------------------
