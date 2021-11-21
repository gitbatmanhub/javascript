'use strict'
//CAlculadora que pida 2 numeros por pantalla
//Si metemos uno mal que nos lo vuelva a pedir
//Que nos muestre en el body de la página en una alert y por la consola el resultado de la suma, resta, mult y div esas 2 cifras

var num1 = parseInt(prompt("Ingrese el primer digito",0));
while(num1 <=0 || isNaN(num1)) {
    var num1 = prompt("Ingrese el primer digito");
}
var num2 = parseInt(prompt("Ingrese el segundo digito",0));
while(num2 <=0 || isNaN(num2)) {
    var num2 = prompt("Ingrese el segundo digito");
}
/*var suma = alert("El resultado de la suma es: "+ (num1+num2));
var resta = alert("El resultado de la resta es: "+ (num1-num2));
var mult = alert("El resultado de la multiplicación es: "+ (num1*num2));
var div = alert("El resultado de la división es: "+ (num1/num2));
*/

var resultado = "La suma es: "+(num1 + num2)+ "<br/>"+
                "La resta es: "+(num1 - num2)+ "<br/>"+
                "La multiplicación es: "+(num1 * num2)+ "<br/>"+
                "La división es: "+(num1 / num2)+ "<br/>";

// \n sirve para saltos de linea en consola y alerts

var resultadoCMD = "La suma es: "+(num1 + num2)+ "\n"+
    "La resta es: "+(num1 - num2)+ "\n"+
    "La multiplicación es: "+(num1 * num2)+ "\n"+
    "La división es: "+(num1 / num2)+ "\n";

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);