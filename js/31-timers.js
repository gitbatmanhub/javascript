'use strict'

window.addEventListener('load', function (){

    function intervalo (){
        //timers
        //setTimeout solo lo ejecuta una vez
        var tiempo = setInterval(function (){
            var encabezado = document.querySelector("h1");
            if (encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "30px";
            }else {
                encabezado.style.fontSize = "50px";
            }
            console.log("Set interval ejecutado");

        }, 1000);
        return tiempo;
    }

    var tiempo = intervalo();





    //Boton Stop
    var stop = document.querySelector("#stop");
    stop.addEventListener("click", function (){
        alert("Has parado el intervalo en bucle");
        clearInterval(tiempo);
    });

    //Boton Start
    var start = document.querySelector("#start");
    start.addEventListener("click", function (){
        alert("Has iniciado intervalo en bucle");
        intervalo();
    });


});

