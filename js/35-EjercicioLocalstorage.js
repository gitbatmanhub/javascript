'use strict'

var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener('submit', function(){
    var titulo = document.querySelector('#addpeliculas').value;
    if (titulo.length >= 1){
        localStorage.setItem(titulo, titulo);
    }
});
var ul = document.querySelector("#peliculasList")

for(var i in localStorage){
    console.log(localStorage);
    if (typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);

    }
}


var formulario = document.querySelector("#formBorrarPelicula");

formulario.addEventListener('submit', function(){
    var titulo = document.querySelector('#borrarPelicula').value;
    if (titulo.length >= 1){
        localStorage.removeItem(titulo);
    }
});