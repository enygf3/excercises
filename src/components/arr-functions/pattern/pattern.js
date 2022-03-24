const pattern = (num) => {
	let arr = [];
	let str = "";

	for (let i = 1; i <= num; i++) {
		str += i;
	}

	str
		.split("")
		.reverse()
		.forEach((item) => {
			let newStr = "";
			newStr = str.substring(item, str.length);
			newStr += str.substring(0, item);
			arr.push(newStr);
		});

	return arr;
};

export default pattern;
