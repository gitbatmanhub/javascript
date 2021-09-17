'use strict'
//Funciones
//Defino la función
function calculadora(num1, num2, mostrar=false){
    //Conjunto de instrucciones a ejecutar
    console.log("Suma"+ (num1+num2)) ;
    console.log("Resta"+ (num1-num2)) ;
    console.log("Multiplicación"+ (num1*num2)) ;
    console.log("División"+ (num1/num2)) ;
    console.log("*****************************");
    console.log(mostrar);
    //return "Hola soy la calculadora"
}
//Invocar la función
//calculadora(32,67);

/*for (var i=1; i<=10; i++){
    console.log(i)
    calculadora(i,8)
}

 */

//Parametros opcionales
calculadora(32,67);


