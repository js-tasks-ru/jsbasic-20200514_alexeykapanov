/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  /**
   * @property {Element} - обязательное свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');

  this.showTable = () => {
    this.el.innerHTML = '<thead><tr><td>Name</td><td>Age</td><td>Salary</td><td>City</td></tr></thead>';
    this.el.innerHTML = this.el.innerHTML + '<tbody>'
      + items.map((item) => {
        let rowConent = '';

        for (const key in item) {
          rowConent += '<td>' + item[key] + '</td>';
        }

        return '<tr>' + rowConent + '</tr>';
      }).join('')
      + '</tbody>';
  };

  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {
    if (items.length < 1 || (Object.keys(items[0]))[column] === undefined) {
      throw 'Incorrect input data';
    }

    let sortKey = (Object.keys(items[0]))[column];

    items.sort((firstItem, secondItem) => {
      if (desc) {
        return secondItem[sortKey] <= firstItem[sortKey] ? -1 : 1;
      }

      return firstItem[sortKey] <= secondItem[sortKey] ? -1 : 1;
    });

    this.showTable();
  };

  this.showTable();
}
