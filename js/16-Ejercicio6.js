'use strict'
// Que nos diga si un numero es par o impar

//1. Ventana Prompt
//2. Si no es valido que no pida de nuevo el numero
//3. Nos muestre si el numero es par o impar

var numero = parseInt(prompt("Ingresa el numero a validar",0));
while(numero <=0 || isNaN(numero)){
    var numero = prompt("Ingresa el numero a validar");
}

if (numero % 2 == 0){
    alert("Es par");
} else if( numero %2 == 1){
    alert("Es impar");
}
