"use strict"

button.addEventListener("click", () => alert("1"));
button.removeEventListener("click", () => alert("1"));
button.onclick = () => alert(2);

//Se ejecutan todos, el segundo esta hecho para eliminar el primero pero no lo hace con la función correcta.
//El último funciona de forma independiente a los otros