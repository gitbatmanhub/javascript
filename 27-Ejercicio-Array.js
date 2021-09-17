'use strict'

/*
1. Programa que pida 6 numeros por pantalla y los ponga en un array
2. Mostrar todos los elementos de la página y en consola
3. Oedenarlo y Mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de valor introducido por el usuario, que nosa diga si existe o su indice

 */


//MOstrar Array
function mostrarArray (elementos, textoCustom=""){
    document.write("<h1>Contenido del array"+textoCustom +"</h1>")
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<strong>"+elemento+ "</strong><br>" )
    });
    document.write("<ul>");

}


//var numeros = new Array(6);
var numeros = [];
for (var i = 0; i <= 5 ; i++){
    //numeros [i] = parseInt(prompt("Introduce un numero", 0));
    numeros.push(parseInt(prompt("Introduce un numero", 0)));
}

//Mostrar en el cuerpo de la página



//Mostrar Array en consola
console.log(numeros);

//Ordenar y mostrar
numeros.sort()
console.log(numeros)