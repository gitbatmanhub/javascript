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
var seccion = document.querySelector("#miseccion")
var hr = document.createElement("hr")

var valor;
for (valor in todosLosDiv){
    if(typeof todosLosDiv[valor].textContent == "string"){
        var parrafo = document.createElement("p")
        var texto = document.createTextNode(todosLosDiv[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
        document.querySelector("#miseccion").prepend(parrafo);
    }

}
    seccion.append(hr);

//Conseguir elementos por su clase css
var divsrojos = document.getElementsByClassName('rojo')
var divsamarillos = document.getElementsByClassName('amarillo')
divsamarillos[0].style.background = 'yellow';


var div;
for (div in divsrojos){
    if ( divsrojos[div].className =='rojo'){
        divsrojos[div].style.background= "red";
    }
}


//Query Selector

var id = document.querySelector("#encabezado");
console.log(id);

var ClaseRojo = document.querySelector(".rojo");
console.log(ClaseRojo);
