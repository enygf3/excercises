const reduce = (arr, callback, initialValue) => {
	let value = 1;

	arr.forEach((item) => {
		value = callback(item, value);
	});

	return value || initialValue;
};

export default reduce;
