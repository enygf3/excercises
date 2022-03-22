const sumAverage = (...arr) => {
	let value = 0;
	let count = 0;
	for (let el of arr) {
		for (let val of el) {
			value += val;
			count++;
		}
	}

	return Math.floor(value / count);
};

export default sumAverage;
