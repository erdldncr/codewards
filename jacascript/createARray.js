// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

// Examples
// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]

function squares(x, n) {
  return Array.from({ length: n }, (v, k) => Math.pow(x, Math.pow(2, k)));
}

const squares = (x, n) =>
  [...Array((n > 0) * n)].map((_, idx) => x ** (2 ** idx));

const squares = (x, n) =>
  Array.from({ length: n }, (_, i) => (i === 0 ? x : (x *= x)));
