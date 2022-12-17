"use strict"

let flecha = document.getElementById("flecha");
let ul = document.getElementById("ul");
ul.hidden = true;      //para que esté oculto

function cambiar(){

    if(ul.hidden == false){
        flecha.innerHTML = "▶";
        ul.hidden = true;
    }else{
        flecha.innerHTML = "🔽";
        ul.hidden = false;
    }
}