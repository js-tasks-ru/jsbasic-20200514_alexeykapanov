/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
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
class ClearedTable {
  constructor(data) {
    this.data = data;
    this.showTable();
  }

  showTable() {
    if (!this.el) {
      this.el = document.createElement('table');
      this.el.classList.add('pure-table');
    } else {
      this.el.innerText = '';
    }

    this.initTableHead();
    this.initTableBodyByRows();
    this.initListeners();
  }

  initTableHead() {
    this.el.innerHTML = this.el.innerHTML
      + `<thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Salary</td>
            <td>City</td>
            <td></td>
          </tr>
        </thead>`;
  }

  initTableBodyByRows() {
    this.el.innerHTML = this.el.innerHTML
      + '<tbody>'
      + this.data.map((row) => {

        return `<tr data-id="${row.id}">`
          + '<td>' + row.name + '</td>'
          + '<td>' + row.age + '</td>'
          + '<td>' + row.salary + '</td>'
          + '<td>' + row.city + '</td>'
          + '<td><a href="#delete" data-action="delete">X</a></td>'
          + '</tr>';
      }).join('')
      + '</tbody>';
  }

  initListeners() {
    let self = this;

    self.el.addEventListener('click', function(event) {
      if (event.target.dataset.action === 'delete') {
        self.onRemoved(parseInt(event.target.closest('tr').dataset.id));
      }
    });
  }

  /**
   * Метод который вызывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {
    this.data = this.data.filter(row => {
      return row.id != id;
    });

    this.showTable();
  }
}

window.ClearedTable = ClearedTable;
