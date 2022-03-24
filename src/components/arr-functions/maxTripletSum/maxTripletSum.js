const maxTripletSum = (arr) => {
	let newArr = [];
	let maxArr = [];
	arr.forEach((item) => {
		newArr.push(item);
	});

	newArr = newArr.sort().reverse();

	newArr.forEach((item) => {
		if (!maxArr.includes(item) && maxArr.length != 3) {
			maxArr.push(item);
		}
	});

	return maxArr[0] + maxArr[1] + maxArr[2];
};

export default maxTripletSum;
