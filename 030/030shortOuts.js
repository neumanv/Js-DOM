"use strict"

function pulsado(){

    let presionado = new Set()  //Set() es un objeto que permite almacenar valores

    document.addEventListener("keydown", function(event) {
        presionado.add(event.code);
    });
}

runOnKeys(
    () => alert("Hello!"),
    "KeyQ",
    "KeyW"
);