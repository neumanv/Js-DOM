"use strict"

let tabla = document.body.firstElementChild;

/*let td1 = tabla.rows[0].cells[0];
td1.style.backgroundColor = 'red';

let td2 = tabla.rows[1].cells[1];
td2.style.backgroundColor = 'red';

let td3 = tabla.rows[2].cells[2];
td3.style.backgroundColor = 'red';

let td4 = tabla.rows[3].cells[3];
td4.style.backgroundColor = 'red';

let td5 = tabla.rows[4].cells[4];
td5.style.backgroundColor = 'red';*/

for(let i = 0; i > tabla.rows.length; i++){
    let color = tabla.rows[i].cells[i];
    color.style.backgroundColor = "red";
}