const toMachineName = (name, separator) => {
	let newName = "";

	newName = name.split(" ");
	newName = newName.join(separator).toLowerCase();
	newName = newName.replace(/[,%]/g, "");

	return name.search(/[0-9]/g) != 0
		? newName
		: "Number can't be the first letter";
};

export default toMachineName;
