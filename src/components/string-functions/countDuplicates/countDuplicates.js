const countDuplicates = (text) => {
	let str = text.toLowerCase();
	let arr = [];
	let count = 0;

	str.split("").forEach((item) => {
		let count = 0;
		str.split("").forEach((element, index) => {
			if (index >= 1) {
				if (item == element && !arr.includes(element)) {
					count = 1;
				}
			}
		});

		if (count) {
			arr.push(item);
		}
	});

	arr.forEach((item) => {
		let num = str.split(item).length - 1;
		if (num >= 2) {
			count++;
		}
	});

	return count;
};

export default countDuplicates;
