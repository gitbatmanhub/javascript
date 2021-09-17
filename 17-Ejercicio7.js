'use strict'
//Tabla de multiplicar de un número introduido por pantalla

var numero = parseInt(prompt("Introduce el numero", 1));
document.write('<h1>La tabla del '+ numero+ ' es </h1>')

/*for (var i = 1; i<=10; i++){
    document.write(i+" x"+numero+'='+(i*numero)+ '<br/>')
}
*/


//Todas las tablas
for (var c = 1; c<=500; c++){
document.write('<h1>La tabla del '+ c+ ' es </h1>')
for (var i = 1; i<=10; i++){
    document.write(i+" x"+c+'='+(i*c)+ '<br/>')
}
}