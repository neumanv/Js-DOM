"use strict"

let data = {
    "Fish": {
        "trout": {},
        "salmon": {}
    },
    "Tree": {
        "Huge": {
            "sequoia": {},
            "oak": {}
        },
        "Flowering": {
            "apple tree": {},
            "magnolia": {}
        }
    }
};

let container = document.getElementById('container');

function createTree(container, data) {
    container.innerHTML = createArbol(data); //llamada a otra función
}

function createArbol(data){
    let ul = "";
    let li = "";
    for(let arbol in data){

    }
}

createTree(container, data); // crea el árbol en el contenedor