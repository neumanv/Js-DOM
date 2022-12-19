"use strict"

var ul = document.getElementById("ul");

for (var i = 0; i < ul.children.length; i++) {
    ul.children[i].addEventListener("click", function(event){

        //Comprobar si se pulsa ctrl
        if(event.ctrlKey){
            //Cambiar si se pulsa
            this.classList.toggle("selected");
        }else{
            //Sólo se puede pulsar una
            for (var j = 0; j < ul.children.length; j++) {
                ul.children[j].classList.remove("selected");
            }

            this.classList.add("selected");
        }
    });
}