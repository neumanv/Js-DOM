"use strict"

//Los 3 hacen lo mismo visualmente pero la función de cada uno es diferente

//Actúa como hijo 
let primero = document.getElementById("primero");
primero.append(document.createTextNode("Primero"));

//Reemplaza el contenido
let segundo = document.getElementById("segundo");
segundo.innerHTML = "Segundo";

//Reemplaza el contenido por un string
let tercero = document.getElementById("tercero");
tercero.textContent = "Tercero";