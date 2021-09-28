var miNombre;
miNombre = "Edwin";
//Funciones hoisting
console.log(miNombre);
var miNombre = "Edwin";
//Se imprimira un undefined por el hecho que no ha sido declarada


///////////////////////////
hey();

function hey() {
    console.log("Hola " + miNombre);
}


var miNombre = "Edwin"
//Se imprimirá "Hola" undefined, por el caso de anterior

// 
