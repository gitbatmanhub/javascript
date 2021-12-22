type alfanumerico = string | number;

//String

let cadena: alfanumerico= "Esto es un string";
cadena=2;
console.log(cadena);

//Number

let numero:  number = 12;
console.log(numero)

//Booleano

let verdader_falso: boolean = true;
console.log(verdader_falso)

//Any
let cualquiera: any = "Hola";
console.log(cualquiera)

//Arrays
var lenguajes: Array<string> = ["PHP", "JS", "CSS"];
console.log(lenguajes)

let years: number[] = [1,2,3,4];
console.log(years)


// Let vs Var

var numero1: number=10;
var numero2: number=12;
if (numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;
    console.log( numero1 , numero2);
}
console.log(numero1, numero2)

