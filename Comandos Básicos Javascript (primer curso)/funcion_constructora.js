//Creo mi funcion y le asigno paramaetros los miismo que yo espero que mi objeto tenga
function auto (marca, modelo, annio){
    //Ocupo la palabra this como referencia a mi función contructora y la palabra clave "marca" que hace referencia a la propiedad de mi Objeto
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;

}
//Generar un nuevo objeto con relación a la funcion constructora
var autoNuevo = new auto("Tesla", "Model 3", 2020);
var autoNuevo2 = new auto("Tesla","Model x",2018);
var autoNuevo3 = new auto("Toyota","Corolla",2020);
