'use strict'
//Dom - Document object Model

function cambiaColor (color){
    caja.style.background = color;
}

//CONSEGUIR ELEMENTOS CON UN ID CONCRETO

//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");
caja.innerHTML = "Texto en la caja desde js";
caja.style.background = "red";
caja.className = "Hola";
console.log(caja)

//Conseguir elementos por su etiqueta
var todosLosDiv = document.getElementsByTagName('div');


var valor;
for (valor in todosLosDiv){
    if(typeof todosLosDiv[valor].textContent == "string"){
        var parrafo = document.createElement("p")
        var texto = document.createTextNode(todosLosDiv[valor].textContent);
        parrafo.append(texto);
        document.querySelector("#miseccion").prepend(parrafo);
    }

}





//Conseguir elementos por si clase css

