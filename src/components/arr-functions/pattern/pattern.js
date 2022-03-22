const pattern = (num) => {
	let arr = [];
	let str = "";

	for (let i = 1; i <= num; i++) {
		str += i;
	}

	for (let i = num; i > 0; i--) {
		let newStr = "";
		newStr = str.substring(i, str.length);
		newStr += str.substring(0, i);
		arr.push(newStr);
	}

	return arr;
};

export default pattern;
