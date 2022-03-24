const multiplyAll = (arr, mult) => {
	let newArr = [];

	arr.forEach((item) => {
		newArr.push(item * mult);
	});

	return newArr;
};

export default multiplyAll;
