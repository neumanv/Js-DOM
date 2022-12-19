"use strict"

function runOnKeys(func, ...codes) {
    let pulsado = {};

    document.addEventListener("keydown", function (event){
        pulsado[event.code] = true;

        //Comprobar si las teclas están pulsadas
        if (codes.every(function (code) {
            return pulsado[code];
        })){
            func();
        }
    });

    // Agregar un manejador de eventos keyup al documento
    document.addEventListener("keyup", function (event){
        pulsado[event.code] = false;
    });
}

runOnKeys(
    () => alert("¡Hola!"),
    "KeyQ",
    "KeyW"
);