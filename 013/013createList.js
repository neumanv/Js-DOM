"use strict"

while(true){

    let obj = prompt("Añadir a la lista");

    if(obj === null){
        break;
    }else{

        let ul = document.createElement("ul");
        document.body.appendChild(ul);
        
        let li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = obj;
    }
}