/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  let isFieldExist = true;

  for (let fieldName in obj) {
    isFieldExist = false;
  }

  return isFieldExist;
}
