'use strict'
//Funciones anonimas
//Funcion que no tienen nombre

var pelicula = function (nombre){
    return "La pelicula es "+ nombre;
}

//Callback (función dentro de una función)
function sumame(num1, num2, sumaYMuestra, sumaPorDos){
    var sumar = num1+num2;
    sumaYMuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}
sumame (7,5, function (dato){
    console.log("La suma es: ", dato);
}, function (dato){
    console.log("La suma por dos es: ", (dato*2));
});