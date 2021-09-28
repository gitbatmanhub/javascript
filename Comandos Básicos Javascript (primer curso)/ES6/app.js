//ES5- Variables
/*
var nombre5 = 'Pablo';
console.log(nombre5);
nombre5 = 'Carlos';
console.log(nombre5);





//ES6- Variables
//Variables con let pueden mutar, variables const no pueden mutar
const nombre6 = 'Pedro';
console.log(nombre6);
let edad = 28;
//nombre6= 'Ana';
//console.log(nombre6);


//BLoques y alcance de las Variables
let test;
test = 10;

function prueba(){
    let test;
    test = 15;
}
prueba();
console.log(test);



Template Strings

let nombre = 'Pablo';
let apellido = 'Vasques';
const ciudad = 'Lima';
const nacimiento = 1985;
function calcularEdad(year){
    return 2021-year;

}

console.log(nombre + ' ' + apellido + ', nació en ' + ciudad + ', su edad es ' + calcularEdad(nacimiento));
//ES6
console.log(`${nombre} ${apellido}, nació en ${ciudad}, y su edad es ${calcularEdad(nacimiento)}`);
*/

//Funciones de cadenas ES6

let nombre = 'Pablo';
let apellido = 'Vasques';
let nombreCompleto= `${nombre} ${apellido}`;
console.log(nombreCompleto); //Presenta el nombre completo
console.log(`${nombre} `.repeat(5)); //Presenta el nombre completo repetido 5 veces
console.log(nombreCompleto.includes('blo')); //Devuelve true o false si lo que está dentro de las comillas está en el parametro
console.log(nombreCompleto.startsWith('Pe')); //Devuelve true o false si lo que está dentro de las comillas es por lo que empieza el parametro
console.log(nombreCompleto.endsWith('ues'));

//Funciones Flechas
const years = [2000, 2005, 2008, 2012];
//ES5
var edad5 = years.map(function(el){
    return 2019- el;
});
console.log(edad5);
//ES6 con Flechas
let edad6 = years.map(el => 2019 - el );
console.log(edad6);





















//
