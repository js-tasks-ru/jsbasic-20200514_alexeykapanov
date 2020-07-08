/**
 * truncate
 * @param {string} inputString
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(inputString, maxlength) {
  let resultString = '';

  if (inputString.length <= maxlength) {
    resultString = inputString;
  } else {
    resultString = inputString.substr(0, maxlength - 1) + '…';
  }

  return resultString;
}
