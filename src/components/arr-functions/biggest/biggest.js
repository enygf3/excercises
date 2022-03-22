const biggest = (arr) => {
	let newArr = arr.sort();
	let str = "";
	for (let i = newArr.length - 1; i >= 0; i--) {
		str += newArr[i];
	}

	return str;
};

export default biggest;
