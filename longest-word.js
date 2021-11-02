function findLongestWordLength(str) {
  let longest = 0;
  let words = str.split(' ');
  for (let x = 0; x < words.length; x++) {
    if (words[x].length > longest)
        longest = words[x].length;
  }
  return longest;
}

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");

function largestOfFour(arr) {
  let longest = []
  
for (let x = 0; x < arr.length; x++) {
    let max = 0
    for (let y = 0; y < arr[x].length; y++){
        if(arr[x][y]>max) 
          max = arr[x][y];
    }
    longest.push(max);
}
return longest
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);