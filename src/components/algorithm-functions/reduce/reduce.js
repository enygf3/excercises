const reduce = (arr, callback, initialValue) => {
	let value = 1;

	for (let i = 1; i < arr.length; i++) {
		if (arr[i + 1]) {
			value += callback(arr[i], arr[i + 1]);
		}
	}

	return value || initialValue;
};

export default reduce;
