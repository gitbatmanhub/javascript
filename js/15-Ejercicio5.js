'use strict'
//Programa que muestre todos los numeros divisores de un numero introducidos en un prompt
var numero = parseInt(prompt("Ingresa un numero", 1))


for (var i = 1; i<=numero; i++ ){
    if (numero %i == 0){
        console.log("Divisor: "+ i)
    }
}
