//Contar números del 1 al 10 con sentencia for
for (var i = 0; i < 11; i++) {
    console.log(i);
}
//Restar numero de al al 10

for (var i = 10; i > 1; i--) {
    console.log(i);
}


//Array que almacena el nombre de los estudiantes
var estudiantes = ["Edwin", "Nathaly", "Cesar", "Angeles"];
//function que me permite almacenar un mensaje que se presenta por cada estudiante
function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}
//Ciclo for para mostar el mensaje del la function por cada uno de los estudiantes
for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i])
}


////////////////////////////////////////7
for (var estudiante of estudiantes) {
saludarEstudiantes (estudiante);
}
