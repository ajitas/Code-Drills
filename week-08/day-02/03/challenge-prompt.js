// Only Once Function


// The function onlyOnce console logs "I'm RUNNING!" and 
// returns true the very first time it's run
// If it's not the first time it's invoke, it should do nothing
// and return null
function onlyOnce() {
  // -------------------- Your Code Here --------------------

console.log("I AM RUNNING!");
return true;

  // -------------------- End Code Area ---------------------
}

// Small Tests for your convenience
console.log(onlyOnce())
onlyOnce = function(){
  return(null);
}
console.log(onlyOnce())
console.log(onlyOnce())
