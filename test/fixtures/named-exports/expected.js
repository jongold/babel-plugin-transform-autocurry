import { curry as _curry } from "ramda";
export const add = _curry(function (a, b) {
  return a + b;
});

export const min = _curry((a, b) => a - b);
