var bicicleta = {
    color: 'Rojo',
    Modelo: 'BMX',
    Frenos: 'Disco',
    VelocidadMaxima: '60km/h',
    cambiaColor: function (nuevo_color){
      //  bicicleta.color = nuevo_color
        this.color = nuevo_color;
        console.log(this);
    }
};
bicicleta.cambiaColor("Azul")