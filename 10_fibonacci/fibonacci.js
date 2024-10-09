const fibonacci = function (n) {
  const num = parseInt(n);

  if (num === 1 || num === 2) {
    return 1;
  }

  if (num === 0) {
    return 0;
  }

  if (num < 0) {
    return "OOPS";
  }

  let a = 1;
  let b = 1;

  for (let i = 3; i <= num; i++) {
    let newFibonnaci = a + b;
    a = b;
    b = newFibonnaci;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
