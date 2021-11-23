$('document').ready(function (){
control = $('.elemento');
    console.log("Hola");
    //Mover elemento por la página
    control.draggable();

    //Redimensionar
    control.resizable();

    //Seleccionar Elementos Ordenar Elementos

   // $('.listaSeleccionable').selectable();

    // Ordenar Elementos

    $('.listaSeleccionable').sortable({
        update: function (event, ui){
            console.log("Ha cambiado la lista");
        }
    });

    //Drop
    $('#elementoMovido').draggable();
    $('#area').droppable({
        drop : function (){
            console.log("HAs soltado algo");
            $(this).css("background","lightblue")
            $('#elementoMovido').css("background","yellow")
        }
    });

    //Efectos
    $('#mostrar').click(function (){
        //$('.cajaEfecto').fadeToggle();
        //$('.cajaEfecto').effect("explode");
        //$('.cajaEfecto').toggle("explode");
        //$('.cajaEfecto').toggle("blind");
        //$('.cajaEfecto').toggle("slide");
        //$('.cajaEfecto').toggle("drop");
        //$('.cajaEfecto').toggle("fold");
        //$('.cajaEfecto').toggle("puff");
        //$('.cajaEfecto').toggle("scale");
        $('.cajaEfecto').toggle("shake" );
    });

    // TooTip (Sigerencias sobre botones)
    $(document).tooltip();

    //Dialog (cuadro de dialogo)
    $('#lanzarPopup').click(function (){
        $('.popup').dialog();
    });

    //Datepicker (Calendario)
    $('#calendario').datepicker();

    // Tabs
    $('#pestanas').tabs();
});