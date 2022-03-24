const sumAverage = (...arr) => {
	let value = 0;
	let count = 0;
	arr.forEach((item, index, arr) => {
		item.forEach((el, index, arr) => {
			value += el;
			count++;
		});
	});

	return Math.floor(value / count);
};

export default sumAverage;
