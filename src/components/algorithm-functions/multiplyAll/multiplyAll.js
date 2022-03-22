const multiplyAll = (arr, mult) => {
	let newArr = [];

	for (let el of arr) {
		newArr.push(el * mult);
	}

	return newArr;
};

export default multiplyAll;
