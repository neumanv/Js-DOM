"use strict"


let sortedRows = Array.from(table.tBodies[0].rows)
.sort((rowA, rowB) => rowA.cells[0].innerHTML.localeCompare(rowB.cells[0].innerHTML));

  table.tBodies[0].append(...sortedRows);