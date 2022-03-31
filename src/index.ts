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
import spread from "./components/high-order/spread/spread";
import zipWith from "./components/high-order/zipWith/zipWith";
import sequenceSum from "./components/recursion/sequenceSum/sequenceSum";
import objectSort from "./components/sort/objectSort/objectSort";
import Singleton from "./components/classes/singleton/singleton";
import "./components/classes/customUpperCase/customUpperCase.ts";
import romanToNumber from "./components/string-functions/romanToNumber/romanToNumber";
import stringify, { Node } from "./components/recursion/stringify/stringify";
import compose from "./components/algorithm-functions/compose/compose";

console.log(sumAverage([3, 8, 1], [4, 0, 3], [9, 3, 3]));
console.log(maxTripletSum([1, 2, 3, 5, 5], 3));
console.log(biggest([3, 30, 34, 5, 9]));
console.log(pattern(5));
console.log(arithmeticSequenceSum(2, 3, 5));
console.log(toMachineName("15334Hello. World", "-"));
console.log(alphabetized("Hello!!!!!!!!!!!!!!!!!!!!!!"));
console.log(countDuplicates("aA11"));
console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));
const addThree = add(3);
console.log(addThree(3));
console.log(multiplyAll([1, 2, 3], 2));
console.log(uniqueSum([1, 3, 8, 1, 8]));
console.log(reduce([1, 2, 3, 4], (acc: any, value: any) => acc * value, 1));
spread((a: any) => console.log(a), [1, 2, 3]);
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

let a: any = "abc";

console.log(a["customUpperCase"]());
console.log(romanToNumber("MMXXII"));
let s: any = new Singleton();
s["name"] = "qwe";
let x = new Singleton();
console.log(s === x);

console.log(
  stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16))))))
);

function plus2(arg: any) {
  return arg + 2;
}

function minus2(arg: any) {
  return arg - 2;
}

function divide2(arg: any) {
  return arg / 2;
}

console.log(compose(plus2, minus2, divide2));
