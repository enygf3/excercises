const zipWith = (func, arr1, arr2) => {
	let newArr = [];

	arr1.forEach((item, index) => {
		let value = func(item, arr2[index]);
		newArr.push(value);
	});

	return newArr;
};

export default zipWith;
