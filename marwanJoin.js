import { marwanLength } from "./marwanLength";
export const marwanJoin = (array, regExp) => {
  let arr = "";
  for (let i = 0; i < marwanLength(array); i++) {
    if (regExp === undefined) {
      arr += array[i];
    } else {
      arr += array[i] + regExp;
    }
  }
  return arr;
};

console.log(marwanJoin([1, 2]));
console.log(marwanJoin(["Marwan", "Zayed"], " "));
console.log(marwanJoin(["Marwan", "Zayed"], ","));
