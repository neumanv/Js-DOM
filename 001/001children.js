"use strict"

//¿El nodo <div> del DOM?
console.log(document.body.childNodes[i]);
//¿El nodo <ul> del DOM?
for(let element of document.body.children){
    console.log(element);
}
//El segundo <li> (con Peter Parker)?
document.getElementById("ul").innerHTML = list.lastElementChild.innerHTML;