function truncateString(str, num) {
	if (num >= str.length) {
		return str;
	}
	let truncated = '';
	for (let i = 0; i < num; i++) {
		truncated += str[i];
	}
  return truncated + '...';
}

console.log(truncateString("andrei", 8));