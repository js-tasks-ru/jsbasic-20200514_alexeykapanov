/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let userSalaryValue = '';

  for (let user of data) {
    if (user.age <= age) {
      if (userSalaryValue.length > 0) {
        userSalaryValue += '\n';
      }

      userSalaryValue = userSalaryValue + user.name + ', ' + user.balance;
    }
  }

  return userSalaryValue;
}
