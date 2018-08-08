// Day 02
// Activity 5


// This function takes in two strings and checks whether they're anagrams of each other.
// Return true if they are anagrams and false if they aren't anagrams.
function anagramCheck (str1, str2) {

  // ---------- Your Code Here ----------
var obj1 = {};
for(var i = 0;i<str1.length;i++){
  var letter = str1[i].toLowerCase();
  if(letter !== " "){
    if(!obj1[letter])
      obj1[letter] = 1;
    else
      obj1[letter]++;
  }
}
var obj2 = {};
for(var i = 0;i<str2.length;i++){
  var letter = str2[i].toLowerCase();
  if(letter !== " "){
    if(!obj2[letter])
      obj2[letter] = 1;
    else
      obj2[letter]++;
  }
}

return isEquivalent(obj1, obj2);


function isEquivalent(a, b){
  var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}
}


  // ----------- End Code Area -----------


// This should console log true
console.log(anagramCheck("I am Lord Voldemort", "Tom Marvolo Riddle"));

// This should console log true
console.log(anagramCheck("Astronomer", "Moon Starer"));

// This should console log false
console.log(anagramCheck("Hello World", "Goodnight Sun"));

// This should console log false
console.log(anagramCheck("Supercalifragilisticexpialidocious", "If you say it loud enough"));
