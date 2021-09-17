'use strict'

//Programa que pida 2 números y que nos día cual es el mayor, el menor y si son iguales.
//Si no son números transfromarlos o repetir la pregunta
var numero1 = parseInt(prompt("Ingresa el primero número"));
var numero2 = parseInt(prompt ("Ingresa el segundo número"));

while(numero1 <=0 || numero2 <=0 || isNaN(numero2, numero1)){
    var numero1 = prompt("Ingresa el primero número");
    var numero2 = prompt ("Ingresa el segundo número");

}

if (numero1 == numero2){
    alert("Los numeros son iguales");
    } else if( numero1 > numero2){
    alert("El numero mayor es " + numero1);
    alert("El numero menor es " + numero2);
    } else if (numero2 > numero1){
    alert("El numero mayor es " + numero2);
    alert("El numero menor es " + numero1);
}   else{
    alert("Ingresa números correctos");
}

