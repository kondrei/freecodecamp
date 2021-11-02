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

    longest.push(Math.max(...arr[x]))
}
return longest
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])