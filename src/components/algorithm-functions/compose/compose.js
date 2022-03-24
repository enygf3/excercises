const compose = (arg, ...props) => {
	let arr = [...props];
	let newArr = [];
	arr.forEach((item) => {
		newArr.push(item(arg));
	});

	return newArr;
};

export default compose;
