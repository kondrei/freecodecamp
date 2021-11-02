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
