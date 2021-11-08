function bouncer(arr) {
	let trueArray = [];
	arr.forEach(element => {
		if (element) {
			trueArray.push(element);
		}
	})
  return trueArray;
}

console.log(bouncer([7, "ate", "", false, 9]));