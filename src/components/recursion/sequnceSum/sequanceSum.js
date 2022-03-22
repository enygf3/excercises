const sequenceSum = (begin, end, step) => {
	if (begin <= end) {
		console.log(begin);
		return sequenceSum(begin + step, end, step);
	} else {
		return 0;
	}
};

export default sequenceSum;
