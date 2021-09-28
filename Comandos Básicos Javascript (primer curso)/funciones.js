//Existen 2 tipos de funcoines
/* Declarativas
function miFuncion() {
    return 3;
}
//Llamar una función
miFuncion();

//Expresión
// Una variable almacena una función (Función anonima)
var miFuncion = function(a, b) {
    return a + b;
}
//Llamar una función
miFuncion();

//Creo un función que espera un Valor
function Saludarestudiante(estudiante) {
    console.log(estudiante);
}
//llamo  a la función y lo doy un Valor
Saludarestudiante("Edwin");
//Llamo a la función y le doy mensaje con el name
function Saludarestudiante(estudiante) {
    console.log(`Hola ${estudiante}`);
}

// Función que suma 2 números pero que no se los han asignado
function sumar(a, b) {
    var resultado = a + b;
    return resultado;
}
//Asignar números
sumar(1, 2)

// Función que suma 2 números pero que no se los han asignado (Versión corta)
function sumar(a, b) {
    return a + b;
}
//Asignar números
sumar(1, 2)


//Scope Global y Scope local
//Función Global
//la variable  miNmobre está en Global
var miNombre = "Edwin";
function nombre(){
    //la variable miApellido está en local
    var miApellido = "Romero";
    console.log(miNombre + " " + miApellido);
}
nombre ();







// A partir de aquí comienza lo del curso Udemy


//Función básica
function bienvenido() {
    return "Hola, bienvenido a la sección de funciones";
}

var mensaje = bienvenido();
console.log(mensaje);


//Partes de una funciónote
//Entradas(parametros-argumentos), código, salida(return)

function cuadradoNumero(num) {
    var resultado = num * num;
    return resultado;
}
var numero = 3;
var valor = cuadradoNumero(numero);
console.log(valor);
console.log(cuadradoNumero(5));





//Funcion que convierte grados C a F
// 32F = 0, 68F =20C
// C= (F-32) * 5/9

function convertir(gradoF){
    var celsius = (gradoF - 32) * 5/9;
    return celsius
}

var temperatura1= convertir(32);
var temperatura2= convertir(68);
console.log(temperatura1);
console.log(temperatura2);
console.log("/////////////////////////////////////////////////////");





//Función que permite calcular edad a partir de su año de nacimiento
//Enviar año de nacimiento y devolver edad

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
calcularTiempoJubilacion(2000, "Nathaly"); */




// Funciones como expresiones
// Declaro variable prueba y recibe un atributo llamado name
var prueba= function(name){ //abro función
    //retorna un mensaje  "Hola" con la concatenación de el atributo name
return "Hola" + name ;
} //cierro función
//Realizo un console.log() con el nombre de la funcion y le doy el parametro name
console.log(prueba(" Edwin"));
