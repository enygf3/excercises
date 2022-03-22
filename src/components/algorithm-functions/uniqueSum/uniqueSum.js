const uniqueSum = (arr) => {
	let value = 0;
	let newArr = [];

	newArr.push(arr[0]);

	for (let i = 0; i < arr.length; i++) {
		let count = 0;
		for (let k = 1; k < arr.length; k++) {
			if (arr[i] == arr[k] && !newArr.includes(arr[i])) {
				count = 1;
			}
		}

		if (count) {
			newArr.push(arr[i]);
		}
	}

	return newArr.reduce((prev, curr) => prev + curr);
};

export default uniqueSum;
