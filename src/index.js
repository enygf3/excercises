import sumAverage from "./components/arr-functions/sumAverage/sumAverage";
import maxTripletSum from "./components/arr-functions/maxTripletSum/maxTripletSum";
import biggest from "./components/arr-functions/biggest/biggest";
import pattern from "./components/arr-functions/pattern/pattern";
import arithmeticSequenceSum from "./components/arr-functions/arithmeticSequenceSum/aritmeticSequenceSum";
import toMachineName from "./components/string-functions/toMachineName/toMachineName";
import alphabetized from "./components/string-functions/alphabetized/alphabetized";
import countDuplicates from "./components/string-functions/countDuplicates/countDuplicates";
import flattenAndSort from "./components/algorithm-functions/flattenAndSort/flattenAndSort";
import add from "./components/algorithm-functions/add/add";
import multiplyAll from "./components/algorithm-functions/multiplyAll/multiplyAll";
import uniqueSum from "./components/algorithm-functions/uniqueSum/uniqueSum";
import reduce from "./components/algorithm-functions/reduce/reduce";
import spread from "./components/algorithm-functions/spread/spread";
import zipWith from "./components/algorithm-functions/zipWith/zipWith";
import sequenceSum from "./components/recursion/sequnceSum/sequanceSum";
import objectSort from "./components/sort/objectSort/objectSort";
import Singleton from "./components/classes/singleton/singleton";
import CustomUpperCase from "./components/classes/customUpperCase/customUpperCase";

console.log(sumAverage([1, 2, 3], [5, 1, 2], [9, 0, 0]));
console.log(maxTripletSum([1, 2, 3, 5, 5]));
console.log(biggest([92, 0, 56, 1, 83]));
console.log(pattern(5));
console.log(arithmeticSequenceSum(2, 3, 5));
console.log(toMachineName("Hello. World", "-"));
console.log(alphabetized("Hello!!!!!!!!!!!!!!!!!!!!!!"));
console.log(countDuplicates("indivisibility"));
console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));
const addThree = add(3);
console.log(addThree(3));
console.log(multiplyAll([1, 2, 3], 2));
console.log(uniqueSum([1, 3, 8, 1, 8]));
console.log(reduce([1, 2, 3, 4], (acc, value) => acc * value, 1));
spread((a) => console.log(a), [1, 2, 3]);
console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]));
console.log(sequenceSum(1, 5, 1));
console.log(
	objectSort(
		[
			{ a: 1, b: 3 },
			{ a: 3, b: 2 },
			{ a: 2, b: 40 },
			{ a: 4, b: 12 },
		],
		"a"
	)
);
let str = new CustomUpperCase("abc");
console.log(str.customUpperCase());
