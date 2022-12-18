"use strict"

let divs = document.querySelectorAll("#container");

for(let div of divs){
    div.insertAdjacentHTML("afterbegin", "<button id='quitar'>[ X ]</button>");
    div.firstChild.onclick = () => div.remove();
}