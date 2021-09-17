'use strict'
// Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario

var numero1 = parseInt(prompt("Ingrese el primer numero"));
var numero2 = parseInt(prompt("Ingrese el segundo numero"));
document.write("<h1> De" + numero1 + " a " + numero2 + "estan estos numeros </h1>");
while (numero1 < numero2){
    numero1++;
    if(numero1%2 !=0){
        console.log("El "+ numero1+ " es impar" )
    }
}

