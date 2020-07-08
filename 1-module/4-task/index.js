/**
 * checkSpam
 * @param {string} inputString base
 * @returns {boolean}
 */
function checkSpam(inputString) {
  let forbiddenWordList = [
    '1XbeT now',
    'xxx',
  ];

  for (let forbiddenWordNumber = 0; forbiddenWordNumber < forbiddenWordList.length; forbiddenWordNumber++) {
    if (-1 !== inputString.indexOf(forbiddenWordList[forbiddenWordNumber])) {
      return true;
    }
  }

  return false;
}
