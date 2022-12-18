"use strict"

let genres = document.getElementById("genres");

let nuevo = new Option("option");
nuevo.value = "flamenco";
nuevo.text = "Flamenco";

genres.appendChild(nuevo); 

function muestra(){
    
    alert(genres.value);
}

