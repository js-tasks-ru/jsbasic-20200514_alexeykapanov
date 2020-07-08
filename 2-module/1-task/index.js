/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let salariesSum = 0;

  for (let fieldName in salaries) {
    if ((typeof salaries[fieldName]) === 'number') {
      salariesSum += salaries[fieldName];
    }
  }

  return salariesSum;
}
