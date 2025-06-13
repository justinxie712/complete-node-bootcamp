class Calculator {
  add(a, b) {
    return a + b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
  subtract(a, b) {
    return a - b;
  }
  power(a, b) {
    return a ** b;
  }
  squareRoot(a) {
    return Math.sqrt(a);
  }
  cubeRoot(a) {
    return Math.cbrt(a);
  }
  factorial(a) {
    let result = 1;
    for (let i = 1; i <= a; i++) {
      result *= i;
    }
    return result;
  }
}

module.exports = class {
  add(a, b) {
    return a + b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
  subtract(a, b) {
    return a - b;
  }
  power(a, b) {
    return a ** b;
  }
  squareRoot(a) {
    return Math.sqrt(a);
  }
  cubeRoot(a) {
    return Math.cbrt(a);
  }
  factorial(a) {
    let result = 1;
    for (let i = 1; i <= a; i++) {
      result *= i;
    }
    return result;
  }
};
