
//Arreglo de lista de cosas random
var frutas = ["manzana", "pera", "uva", "vereza", "fresa"];
//Imprimir lo que hay en el Arreglo
console.log(frutas);
//Sabeer cuantos elementos existen en un Arreglo
console.log(frutas.length);
//Agregar más items a el Arreglo
var frutas = ["manzana", "pera", "uva", "vereza", "fresa"];
var masFrutas = frutas.push("Platano");
//Imprimir el item nr...
console.log(frutas[0]);
//Eliminar el ultimo elemneto en el Array
var ultimo = frutas.pop ("Platano");
//Agregar un valor al inicio del Array
var nuevaLongitud = frutas.unshift("Platano");
//Eliminar el elemnto que esté al principio
var borrarFruta = frutas.shift("Platano");
//Buscar el numero de la posición de cierto elemento dentro de un Array
var posicion = frutas.indexOf("uva");
//Eliminar desde-hasta
frutas.splice(1, 2);
