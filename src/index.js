import "./styles/main.sass";
import sumAverage from "./components/arr-functions/sumAverage/sumAverage";
import maxTripletSum from "./components/arr-functions/maxTripletSum/maxTripletSum";
import biggest from "./components/arr-functions/biggest/biggest";
import pattern from "./components/arr-functions/pattern/pattern";
import arithmeticSequenceSum from "./components/arr-functions/arithmeticSequenceSum/aritmeticSequenceSum";
import toMachineName from "./components/string-functions/toMachineName/toMachineName";

console.log(sumAverage([1, 2, 3], [5, 1, 2], [9, 0, 0]));
console.log(maxTripletSum([1, 2, 3, 5, 5]));
console.log(biggest([92, 0, 56, 1, 83]));
console.log(pattern(5));
console.log(arithmeticSequenceSum(2, 3, 5));
console.log(toMachineName("1Hello, World", "-"));
