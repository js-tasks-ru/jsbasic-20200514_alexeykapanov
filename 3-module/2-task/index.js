/**
 * Найти min/max в произвольной строке
 * @param   {string} inputString -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(inputString) {
  const arraySplitByComma = inputString.replace(/ /g, ',').split(',');
  let arrayNumbers = arraySplitByComma.filter(
    value => isFinite(value) && value !== ''
  ).map(
    value => +value
  );

  let sortedArrayNumbers = arrayNumbers.sort(
    (valueOne, valueSecond) => valueOne - valueSecond
  );

  let result = {
    min: sortedArrayNumbers[0],
    max: sortedArrayNumbers[sortedArrayNumbers.length - 1]
  }

  return result;
}
