/**
 * @param {string} inputString
 * @returns {string}
 */
function camelize(inputString) {
  let arrayWithStringByDash = inputString.split('-');
  let camelCaseString = '';

  for (let i = 0; i < arrayWithStringByDash.length; i++) {
    if (i > 0) {
      camelCaseString += arrayWithStringByDash[i][0].toUpperCase() + arrayWithStringByDash[i].slice(1, arrayWithStringByDash[i].length);
    } else {
      camelCaseString += arrayWithStringByDash[i];
    }
  }

  return camelCaseString;
}
