const flattenAndSort = (arr) => {
	let newArr = [];

	for (let el of arr) {
		for (let num of el) {
			newArr.push(num);
		}
	}

	return newArr.sort();
};

export default flattenAndSort;
