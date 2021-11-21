var fecha = new Date();

var year= fecha.getFullYear();
var mes=  fecha.getMonth();
var dia= fecha.getDay();
var hora= fecha.getHours();
var minutos= fecha.getMinutes();

var textoHora = `
    El año es: ${year}
    El mes es: ${mes+1}
    El día es: ${dia}
    Las horas son: ${hora}
    Los minutos son: ${minutos}
`;

console.log(textoHora);
// Sacar un número Random de 4 digitos, el numero de ceros es la base del numero de digitos
console.log(Math.ceil(Math.random()*10000 ));
