//Ejercicio de códificación 3
//Calcular cuantos años le falta a una persona para que se jubile
//Una persona se jubila a los 65 años de edad
//Enviar datos a la función sobre su nacimiento y su nombre

function calcularedad (anacimiento){
    var anos = 2021-anacimiento;
    return anos

}

var edad1 = calcularedad();
console.log("Usted tiene " + edad1 + " años de edad");





function calcularTiempoJubilacion(yearNacimiento, name) {
    var edad = calcularedad(yearNacimiento);
    var yearJubilacion = 65 - edad;
    console.log(name + " Le faltan " + yearJubilacion+ "  años para su jubilación");
}

calcularTiempoJubilacion(1998,"Edwin");
calcularTiempoJubilacion(2000, "Nathaly");
