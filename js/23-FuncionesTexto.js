'use strict'

//Transformación de strings
var num = 444;
var texto1 = "Bienvenido al curso de JS";
var texto2 = "Es muy buen curso";

//toUpperCase Convertir string en Mayusculas
//toLowerCase Cinvertir string en Minusculas

var dato = num.toString();
    dato = texto1.toLowerCase();
    dato = texto2.toUpperCase();

console.log(dato);

//Calcular Longitud

var nombre = "Edwin Romero";
var nombres = ["Hola", "Hola"]
console.log(nombres.length);

//Concatenar

/* var textoTotal = texto1+ " " + texto2;
console.log(textoTotal);
 */

var textoTotal = texto1.concat(" "+ texto2);
console.log(textoTotal);

//Buscar palabra dentro del String *************

//indexOf Busca la primera coincidencia
var busqueda = texto1.indexOf("curso");
console.log(busqueda);
//lastindexOf Busca la ultima coincidencia
var busqueda = texto1.lastIndexOf("curso");
console.log(busqueda);
//search Busca la primera coincidencia
var busqueda = texto1.search("curso");
console.log(busqueda);
//match Muestra toda la busqueda en un array
var busqueda = texto1.match("curso");
console.log(busqueda);
//Poner /curso/g para hacer busqueda global en todo el texto
var busqueda = texto1.match(/curso/g);
console.log(busqueda);
//substr (14, 5) mostrará que caracteres hay desde el 14 y los  5 caracteres
var busqueda = texto1.substr(14,5);
console.log(busqueda);
//charAt(numero) - Sacar una letra en concreto según el número ingresado
var busqueda = texto1.charAt(1);
console.log(busqueda);
//startsWith("palabra") Busca al inicio del string la palabra ingresada
var busqueda = texto1.startsWith("Bienvenido");
console.log(busqueda);
//endsWith("palabra") Busca al final del string la palabra ingresada
var busqueda = texto1.endsWith("JS");
console.log(busqueda);
//include Busca si la palabra existe o no en el array
var busqueda = texto1.includes("JS");
console.log(busqueda);

//Reemlazar Texto***************************+

//Replace Reemplazar string por otro
var busqueda = texto1.replace("JS", "Symfony");
console.log(busqueda);

//Slice(numero) Mostrar un string a partir del numero del caracrter puesto
var busqueda = texto1.slice(14);
console.log(busqueda);

// Split(" ") Separador que utiliza el espacio para transformar cada palabra de un array a un elemento del mimso array
var busqueda = texto1.split(" ");
console.log(busqueda);

//Trim Elimina los espacios de un string
var busqueda = texto1.trim();
console.log(busqueda);

