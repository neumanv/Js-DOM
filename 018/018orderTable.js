"use strict"

let tabla = document.getElementsByTagName("table");

let sortedRows = Array.from(tabla.tBodies[0].rows) // 1
  .sort((rowA, rowB) => rowA.cells[0].innerHTML.localeCompare(rowB.cells[0].innerHTML));

  tabla.tBodies[0].append(...sortedRows);