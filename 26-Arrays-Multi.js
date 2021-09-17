'use strict'
//Array Multidimencional
var categorias = ["Acción", "Terror", "Comedia"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];
//.sort Ordenas Alfabeticamente
//.reverse Ordenar inversamente
peliculas.reverse();

console.log(peliculas);
var cine = [categorias, peliculas];
//console.log(cine[0][1]);
//console.log(cine[1][2]);

//Operaciones con Arrays
//Añadir objetos a un array
/*
var elemento = "";
do{
    elemento = prompt("Introduce tu pelicula");
    peliculas.push(elemento);

} while(elemento != "Acabar");

//.pop Elimina el ultimo elemento del attay
peliculas.pop();
console.log(peliculas)

 */

//Eliminar elementos de un Array
/*
var indice = peliculas.indexOf("Gran torino");
if (indice > -1){
    peliculas.splice(indice, 1);
}
console.log(peliculas);

 */

//Convertir un array a string separado con comas
var peliculasString = peliculas.join();

var cadena = "Texto1, texto 2, texto3";
var cadenaArray = cadena.split(", ");
console.log(cadenaArray);

//Ordenas Array

