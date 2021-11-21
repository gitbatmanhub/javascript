'use strict'
//Plantillas de texto


var nombre = prompt("Ingresa tu name");
var apellidos = prompt("Ingresa tu apellido");

var texto = `
    <h1>Hola que tal</h1>
    <h1>Mi nombre es: ${nombre}</h1>
    <h1>Mi apellido es: ${apellidos}</h1>
`;

    document.write(texto)