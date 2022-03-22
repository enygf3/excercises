const maxTripletSum = (arr) => {
	let newArr = [];
	let maxArr = [];
	for (let el of arr) {
		newArr.push(el);
	}

	newArr = newArr.sort();

	for (let i = newArr.length - 1; i >= 0; i--) {
		if (!maxArr.includes(newArr[i]) && maxArr.length != 3) {
			maxArr.push(newArr[i]);
		}
	}

	return maxArr[0] + maxArr[1] + maxArr[2];
};

export default maxTripletSum;
