/**
 * ucFirst
 * @param {string} inputString
 * @returns {string}
 */
function ucFirst(inputString) {
  let resultString = '';

  inputString = String(inputString);

  if (inputString.length === 0) {

    return resultString;
  }

  resultString = inputString[0].toUpperCase();

  for (let symbolNumber = 0; symbolNumber < inputString.length; symbolNumber++) {
    if (symbolNumber === 0) {
      continue;
    }

    resultString = resultString + inputString[symbolNumber];
  }

  return resultString;
}
