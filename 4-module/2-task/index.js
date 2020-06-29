/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  if (table.rows.length !== table.rows[0].cells.length) {
    throw 'The matrix is not square. Only a square matrix can have a diagonal.';
  }

  let redColorName = 'red';

  Array.from(table.rows).forEach(function (row, rowNumber, rows) {
    row.cells[rowNumber].style.backgroundColor = redColorName;
  });
}
