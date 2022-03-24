const uniqueSum = (arr) => {
	let newArr = [];

	newArr.push(arr[0]);

	arr.forEach((item) => {
		let count = 0;
		arr.forEach((element, index) => {
			if (index >= 1) {
				if (item == element && !newArr.includes(item)) {
					count = 1;
				}
			}
		});

		if (count) {
			newArr.push(item);
		}
	});

	return newArr.reduce((prev, curr) => prev + curr);
};

export default uniqueSum;
