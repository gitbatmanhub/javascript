//Ejercicio 4
//Implementar una función que nos perminta evaluar el porcentaje de respuestas positivas y negativas de un examen. La función debe recibir el nombre y la cantidad de respuestas positivas y negativas. LA función debe calcualar el porcentaje que representa cada tipo de respuesta, en una base de 100 preguntas.
//De las respuestas positivas se define el score de las personas A(>90%), B(70%-89%), C(45%-69%), D(<45%)




var calcularScore = function(name, pos, neg) {
    var porPo = (pos / 100) * 100;
    var porNeg = (neg / 100) * 100;
    var score = "";


    if (porPo > 90) {
        score= "A";
    } else if (porPo >= 70) {
        score= "B";
    } else if (porPo >= 45) {
        score= "C";
    } else {
        score= "D";
    }
    return `${name} tiene el Score ${score}, positivas:${porPo}%, negativas${porNeg}%`;
}
var resultado = calcularScore("Edwin", 72, 28);
console.log(resultado);
