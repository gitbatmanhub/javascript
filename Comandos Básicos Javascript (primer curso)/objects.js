//Creo un objeto y le doy propiedades
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    color: "Rojo",
    annio: 2020
};
//Para llamar a aquel Objeto
miAuto
//Para llama a una propiedad en especifico de ese objeto
miAuto.marca



//Creo un objeto y le doy propiedades
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    color: "Rojo",
    annio: 2020
    //puedo añadir una función
    detallesDelAuto: function() {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};
//Para llamar a aquel Objeto
miAuto
//Para llama a una propiedad en especifico de ese objeto que sea una Funcion
miAuto.detallesDelAuto();
