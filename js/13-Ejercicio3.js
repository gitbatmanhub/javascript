'use strict'

// Hacer un programa que muestre los numeros entre dos numeros introducidos por el ususario

var numero1 = parseInt(prompt("Ingrese el primer numero"));
var numero2 = parseInt(prompt("Ingrese el segundo numero"));
document.write("<h1> De" + numero1 + " a " + numero2 + "estan estos numeros </h1>");
for (var i = numero1; i <= numero2; i++){
    document.write(i + "<br/>");
}
