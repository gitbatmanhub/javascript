'use strict'

//Arrays, Arreglos, Matrices

var nombre = "Edwin Cesar";
var nombres = ["Edwin", "Cesar", "Nathaly"];
console.log(nombres);
var lenguajes = new Array("PHP", "Js", "Go", "Java" );
/*
var elemento = parseInt(prompt("¿Que elemento de array quieres", 0));

if(elemento >= nombres.length){
    alert("Introduce el numero correcto menor que: " + nombres.length);
}else{
    alert("El usuario seleccionado es "+ nombres[elemento]);
}

//Mostrar todos los items del array en la página
document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("<ul>")


for (var i =0; i < lenguajes.length; i++){
    document.write("<li>"+ lenguajes[i]+ "</li>");
}
document.write("<ul>")

 */

for (let lenguaje in lenguajes){
    document.write("<li>"+ lenguajes[lenguaje]+ "</li>");
}
document.write("<ul>")

//Buscar en un Array
var busqueda = lenguajes.find(function (lenguaje){
    return lenguaje == "PHP";
});
console.log(busqueda);
/*
La misma busqueda con función flecha
var buscqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP";);
console.log(buscqueda);
 */

//Buscar por rangos dentro de un array
var precios = [10, 20, 50, 80, 12];
var busqueda = precios.some(precios => precios <10);
console.log(busqueda)