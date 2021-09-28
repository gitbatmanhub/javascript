//Array con Objetos
var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];

//Crear metodo de filtro, validará y los pondrá en otro array todos los articulos que cumplan la sentencia

var articulosFiltrados= articulos.filter(function(articulo){
    return articulo.costo  <= 500
});

//Metodo de map que creara nuevo array y no modifica los del arrray principal

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});
