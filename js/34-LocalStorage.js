'use strict'

//Localstorage

//Comprobar disponibilidad del Local Storage

if(typeof (Storage) !== 'undefined'){
    console.log('Está disponible');
} else {
    console.log('No está disponible');

}


//Guardar datos

localStorage.setItem('titulo', 'Curso de Js');

//Recuperar elemento

document.querySelector("#peliculas").innerHTML = localStorage.getItem('titulo');


//Guardar objetos

var usuario = {
    nombre : "Edwin Romero",
    email : "edwin@gmail.com",
    web : "cuevafriki.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar objeto

var userJs = JSON.parse(localStorage.getItem('usuario'));
console.log(userJs);
document.querySelector("#datos").append(" " + userJs.web + " " + userJs.nombre);

localStorage.clear();























//




