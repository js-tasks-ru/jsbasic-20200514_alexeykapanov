/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let factorialValue = 1;

  if ((n ^ 0) !== n || n < 0) {
    throw 'Invalid parameter detected';
  }

  for (let counter = 1; counter <= n; counter++) {
    factorialValue = counter * factorialValue;
  }

  return factorialValue;
}
