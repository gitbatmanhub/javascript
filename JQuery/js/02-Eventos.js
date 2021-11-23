$(document).ready(function (){
    var caja= $('#caja');
    /*MouseOver - MouseOut

caja.mouseover(function (){
    $(this).css("background","red")
});
caja.mouseout(function (){
    $(this).css("background","green")
});

     */
    function cambiaRojo(){
        $(this).css("background","red");
    }

    function cambiaVerde (){
        $(this).css("background","green");
    }
// Hover

    caja.hover(cambiaRojo, cambiaVerde);

    //Click, doble Click

    caja.click(function (){
        $(this).css("background","blue")
            .css("color","white");
    });

    caja.dblclick(function (){
        $(this).css("background","pink")
            .css("color","yellow");
    });

    //Blur y Focus

    var nombre = $('#nombre')
    var datos = $('#datos');
    nombre.focus(function (){
        $(this).css("border","2px solid green")
    });


    //Tomar el valor del input ee incrustarlo en el div id="datos"
    nombre.blur(function (){
        $(this).css("border","1px solid black");
        datos.text($(this).val()).show();
    });

    //Mouse Down, Mouse Up
    datos.mousedown(function (){
        $(this).css("border-color","gray")
    });

    datos.mouseup(function (){
        $(this).css("border-color", "black")
    })

    //Mousemove
    $(document).mousemove(function (){
        var sigueme = $('#sigueme') ;
        sigueme.css("left",event.clientX)
                .css("top",event.clientY);
        $('body').css("cursor","none")

    });
});