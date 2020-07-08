/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  Array.from(table.rows).forEach(function (row, rowNumber, rows) {
    let boundaryAge = 18,
      ageRow = row.cells[1],
      sexRow = row.cells[2],
      statusRow = row.cells[3],
      availableAttributeName = 'data-available';

    if ((+ ageRow.innerText.trim()) < boundaryAge) {
      row.setAttribute('style', 'text-decoration: line-through');
    }

    if ((sexRow.innerText).trim() === 'm') {
      row.classList.add('male');
    } else {
      row.classList.add('female');
    }

    if (statusRow.hasAttribute(availableAttributeName)) {
      if (statusRow.getAttribute(availableAttributeName) === 'true') {
        row.classList.add('available');
      } else {
        row.classList.add('unavailable');
      }
    } else {
      row.setAttribute('hidden', 'hidden');
    }
  });
}
