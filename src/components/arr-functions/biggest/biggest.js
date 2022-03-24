const biggest = (arr) => {
	let newArr = arr.sort().reverse();
	let str = "";
	newArr.forEach((item) => {
		str += item;
	});

	return str;
};

export default biggest;
