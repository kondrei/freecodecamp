function titleCase(str) {
  let camelCase = str.split(" ");
  for (let x = 0; x < camelCase.length; x++) {
    camelCase[x] = camelCase[x].charAt(0).toUpperCase() + camelCase[x].slice(1).toLowerCase();
  }
  return camelCase.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));