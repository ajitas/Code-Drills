// Rotation Index



// `rotIndex` takes in an array of integers where if the front part was appended to the
// back part, it would be a sorted array and returns the index of where the split happens
function rotIndex1(arr) {
  if (arr[0] < arr[arr.length - 1]){
    return 0;
  }
  for (var i = 1; i < arr.length - 1; i++) {
    if (arr[i - 1] > arr[i] && arr[i + 1] > arr[i]) {
      return i;
    }
  }
  return i;
}

function rotIndex(arr){
  var floorIndex =0;
  var ceilIndex = arr.length-1;

  if(arr[floorIndex]<arr[ceilIndex])
    return 0;

  while(floorIndex<ceilIndex){
    var guessIndex = Math.floor(floorIndex + (ceilIndex-floorIndex)/2);

    if(arr[guessIndex]>arr[floorIndex])
      floorIndex = guessIndex;
    else
      ceilIndex = guessIndex;

    if(floorIndex+1 === ceilIndex)
      break;
  }
  
  return ceilIndex;
}

module.exports = rotIndex;
