"use strict"

//localeCompare() devuelve un número que indica donde se coloca la cadena de referencia
let orden = Array.from(tabla.tBodies[0].rows).sort((rowA, rowB) => rowA.cells[0].innerHTML.localeCompare(rowB.cells[0].innerHTML));

tabla.tBodies[0].append(...orden);     //... permite copiar un array