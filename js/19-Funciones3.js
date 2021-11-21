'use strict'
//Funciones parametros opcionales***********************
//Defino la función
function calculadora(num1, num2, mostrar=false) {
    //Conjunto de instrucciones a ejecutar
    if (mostrar== false) {
        console.log("Suma" + (num1 + num2));
        console.log("Resta" + (num1 - num2));
        console.log("Multiplicación" + (num1 * num2));
        console.log("División" + (num1 / num2));
        console.log("*****************************");
    }else{
        document.write("Suma" + (num1 + num2+ '<br/>'));
        document.write("Resta" + (num1 - num2+ '<br/>'));
        document.write("Multiplicación" + (num1 * num2+ '<br/>'));
        document.write("División" + (num1 / num2+ '<br/>'));
        document.write("*****************************");
    }
    //return "Hola soy la calculadora"
}


calculadora(1,4);
calculadora(2, 5, true);


