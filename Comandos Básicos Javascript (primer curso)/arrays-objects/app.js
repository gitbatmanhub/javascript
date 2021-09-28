//Arreglos en javascript
/*var nombre = ["Edwin", "Cesar", "Nathaly", "Angeles"];
var vegetales = new Array("Tomate", "Lechuga", "Zanahoria");
console.log(nombre[2]);
console.log(nombre[1]);
console.log(vegetales[1]);

nombre [1] = "Jose";
console.log(nombre[1]);
vegetales [2]= "Nabo";
console.log(vegetales[2]);
//Conocer la longitud del arreglo
console.log(nombre.length);


//*************************
//Operaciones con Arreglos
var frutas = ["Pera", "manzana", "uva", "sandia"];
console.log(frutas);
//Recorrer Arreglos
for (var i = 0; i <= frutas.length -1; i++) {
    console.log(frutas[i]);
}

frutas.forEach(function (elemento, indice, Array){
    console.log(elemento, indice);
});

/*frutas.push("naranja");
console.log(frutas);
frutas.unshift("Fresa")
frutas.pop();
console.log(frutas);
frutas.shift();
console.log(frutas);
var pos = frutas.indexOf("uva");
console.log(pos);
frutas.splice(1, 2);
console.log(frutas);*/

/*Arreglo con elemento de diferentes tipo
var persona = ["Pablo", "Vasques", 34, "9999999999", 1.75];
console.log(persona);

//Objeto literal
var persona={
    nombre: "Pablo",
    apellido: "Vazques",
    gustos: ["Futbol", "Peliculas", "Ingles"],
    trabajo: "Instructor",
    esCasado: true

};

console.log(persona);
console.log(persona.nombre);
console.log(persona["trabajo"]);
//Mutar
persona.esCasado= false;
console.log(persona.esCasado);


//Objetos con la sintaxys Object
var persona2 = new Object();
persona2.nombre="Ana";
persona2.apellido="Pinedo";
persona2["trabajo"]= "Web Developer";
console.log(persona2);
*/

//Objetos y metodos

var persona = {
    //Propiedades
    nombre: "Pablo",
    apellido: "Vazques",
    gustos: ["Futbol", "Peliculas", "Ingles"],
    trabajo: "Instructor",
    esCasado: true,
    yearNacimiento: 1985,
    //Métodos
    calcularEdad : function(){
        this.edad= 2019 - this.yearNacimiento;
    }
};
persona.calcularEdad();
console.log(persona);










//
