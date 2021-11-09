function mutation(arr) {
	let arr1 = arr[1].toLowerCase();
	let arr2 = arr[0].toLowerCase();
	for (let x = 0; x < arr2.length; x++) {
		if (arr2.indexOf(arr1[x]) < 0) 
			return false;
	}
  return true;
}
// function mutation(arr) {
//   let test = arr[1].toLowerCase();
//   let target = arr[0].toLowerCase();
//   for (let i = 0; i < test.length; i++) {
//     if (target.indexOf(test[i]) < 0) return false;
//   }
//   return true;
// }
console.log(mutation(["Hello", "loloo"])); //sould return false
console.log(mutation(["Mary", "Aarmy"])); //should return true.