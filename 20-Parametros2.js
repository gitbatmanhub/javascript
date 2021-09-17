'use strict'
//Parametros Rest y Spread
function listadoFrutas(fruta1, fruta2, ...resto){
    console.log("Fruta 1: "+ fruta1);
    console.log("Fruta 2: "+ fruta2);
    console.log(resto);
}
listadoFrutas("Naranja", "Manzana", "Sandia", "Coco", "Melon");

var frutas = ["Naranja", "Manzana"]
listadoFrutas(frutas, "Sandia", "Coco", "Melon");
