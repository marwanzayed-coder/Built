import { marwanLength } from "./marwanLength";

export const marwanReverse = (string) => {
  let reversed = "";
  for (let i = marwanLength(string) - 1; i >= 0; i--) reversed += string[i];
  return reversed;
};
