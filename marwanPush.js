import { marwanLength } from "./marwanLength";

export const marwanPush = (array, ...ele) => {
  let arr = array;
  let count = marwanLength(array);
  for (let i = 0; i < marwanLength(ele); i++) {
    arr[count++] = ele[i];
  }
  return arr;
};
