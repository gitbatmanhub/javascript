//$ == jQuery
$(document).ready(function (){
    //Selector de ID
    var rojo = $("#rojo").css("background", "red")
                          .css("color","white");
    var amarillo = $("#amarillo").css("background", "yellow")
                            .css("color","green");
    var verde = $("#verde").css("background", "green")
                            .css("color","white");

    //Selector de clases

    var miClase = $('.zebra').css("padding","5px");
    $(".sinBorde").click(function (){
        console.log("click dado");
        $(this).addClass("zebra");
    });

    //Selectores de etiqueta
    var parrafos = $('p').css("cursor","pointer")
    parrafos.click( function (){
        var that = $(this);
        if (!that.hasClass('grande')){
            that.addClass('grande');
        }else{
            that.removeClass('grande');
        }

    });

    //Selectrores de atributos

    $('[title="Google"]').css("background","#ccc")
    $('[title="Facebook"]').css("background","blue")


    //Otros
  //  $('p,a').addClass("margenSuperior");

    //Buscar
    var busqueda= $('#elemento2').parent().parent().find('.resaltado');
    console.log(busqueda)


});