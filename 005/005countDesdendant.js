"use strict"

//¿Cuál es el texto dentro de él (sin el subárbol)?
for(let li of document.getElementsByTagName("li")){
    console.log(li.firstChild);
}

//El número de <li> anidados: todos los descendientes, incluidos los profundamente anidados.
console.log(document.getElementsByTagName("li").length);