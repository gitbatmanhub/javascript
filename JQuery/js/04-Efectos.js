$(document).ready(function (){
    $("#mostrar").hide();
var caja = $("#caja") ;
    $("#mostrar").click(function (){
        $(this).hide();
        $("#ocultar").show();
        caja.fadeTo('slow', 1);
    })

    $("#ocultar").click(function (){
        $(this).hide();
        $("#mostrar").show();
        caja.slideUp('slow', function (){
            console.log('Cartel ocultoo');
        });

    })



    $('#todoEnUno').click(function (){
        caja.fadeToggle('fast');
    })

    $('#animar').click(function (){
        caja.animate({
                                marginLeft : '500px',
                                fontSize: "40px",
                                height: '60px',
                                    }, 'slow')
                                .animate({
                                    borderRadius: '900px',
                                    marginTop: '80px'

                                }, 'slow')

                                .animate({
                                    borderRadius: '0px',
                                    marginLeft: '0px'

                                }, 'slow')

                                .animate({
                                        borderRadius: '100px',
                                        marginTop: '0px'

                                    }, 'slow')
                                .animate({
                                        marginLeft : '500px',
                                        fontSize: "40px",
                                        height: '60px',
                                    }, 'slow');

        ;
    })
});