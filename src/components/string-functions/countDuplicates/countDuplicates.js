const countDuplicates = (text) => {
	let str = text.toLowerCase();
	let arr = [];
	let count = 0;

	for (let i = 0; i < str.length; i++) {
		let count = 0;
		for (let k = 1; k < str.length; k++) {
			if (str[i] == str[k] && !arr.includes(str[k])) {
				count = 1;
			}
		}

		if (count) {
			arr.push(str[i]);
		}
	}

	for (let el of arr) {
		let num = str.split(el).length - 1;
		if (num >= 2) {
			count++;
		}
	}

	return count;
};

export default countDuplicates;
