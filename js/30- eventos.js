'use strict'


window.addEventListener('load', function (){
    // Eventos de ratón

    /* Capturar eventos con html doble click (revisar linea 10 index.html)


    var boton = document.querySelector("#boton");

     */

    function cambiarColor(){
        console.log("Me hasd dado click")
        var bg = boton.style.background;
        if ( bg == "green"){
            boton.style.background= "red";

        }else{
            boton.style.background= "green";
            boton.style.padding = "10px";
            boton.style.border = "1px solid #ccc";
        }
        return true;
    }

//Click
    var boton = document.querySelector("#boton");
    boton.addEventListener('click',function (){
        cambiarColor();
        this.style.border = "10px solid black";
        console.log(this);
    });

//Mouse over

    boton.addEventListener('mouseover', function (){
        boton.style.background = "yellow";
    });


//Mouse Out

    boton.addEventListener('mouseout', function (){
        boton.style.background = "#ccc";
    });

// Focus
    var input = document.querySelector("#campoNombre")
    input.addEventListener('focus', function (){
        console.log("Estas dentro del input");
    });

//Blur
    var input = document.querySelector("#campoNombre")
    input.addEventListener('blur', function (){
        console.log("Estas fuera del input");
    });
//Keydown
    input.addEventListener('keydown', function (event){
        console.log("[keydown]Estas pulsando esta tecla", String.fromCharCode(event.keyCode));
    });
//Keypress
    input.addEventListener('keypress', function (event){
        console.log("[keypress]Tecla presionada", String.fromCharCode(event.keyCode));
    });
//Keyup
    input.addEventListener('keyup', function (event){
        console.log("[keyup]Tecla soltada", String.fromCharCode(event.keyCode));
    });

}) //endload
