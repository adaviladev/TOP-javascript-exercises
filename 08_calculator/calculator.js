const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

// The initial value at 0 lets me compute the sum of empty array
const sum = function (arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

const multiply = function (arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
