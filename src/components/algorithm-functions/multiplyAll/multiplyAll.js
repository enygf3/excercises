const multiplyAll = (arr, mult) => {
	let newArr = [];

	arr.forEach((item) => {
		newArr.push(el * mult);
	});

	return newArr;
};

export default multiplyAll;
