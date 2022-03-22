const zipWith = (func, arr1, arr2) => {
	let newArr = [];

	for (let i = 0; i < arr1.length; i++) {
		let value = func(arr1[i], arr2[i]);
		newArr.push(value);
	}

	return newArr;
};

export default zipWith;
