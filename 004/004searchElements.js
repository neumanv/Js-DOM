"use strict"

//La tabla con id="age-table"
let tabla = document.getElementById("age-table")
console.log(tabla);

//Todas los elementos label dentro de la tabla (debería haber 3)
console.log(document.getElementsByTagName("label"));

//El primer td en la tabla (con la palabra “Age”)
console.log(tabla.rows[0].cells[0]);

//El form con name="search"
console.log(document.getElementsByName("search"));

//El primer input en el form
console.log(document.getElementsByTagName("input")[0]);

//El último input en ese formulario
console.log(document.getElementsByTagName("input")[8]);