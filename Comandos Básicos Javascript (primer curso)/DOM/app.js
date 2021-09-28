//Examinando el DOM

/*console.dir(document);
console.log(document.title);
document.title="Prueba";
console.log(document.title);
console.log(document.head);
console.log(document.body);
//onsole.log(document.all);
console.log(document.all[6]);
console.log(document.all[10]);
console.log(document.forms);
console.log(document.links);
*/



//// Obtener elementos por id, por tag y por clase ////




//Alterar valores desde JS por id
//GetElementbyID
//console.log(document.getElementById('header-title'));
/*var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
//console.log(header);

headerTitle.textContent = "Hola";
headerTitle.innerText= "Adios";
headerTitle.innerHTML= '<h3>Prueba</h3>';*/



//Alterar valores desde JS por clase
//getElementsByClassName
//Get Elements by class id
/* var items = document.getElementsByClassName('list-group-item');
console.log(items[3]);
items[0].textContent='Prueba';*/


//Alterar valores desde JS por etiqueta
/* var items= document.getElementsByTagName ('li');
items[2].textContent='Prueba 02';*/

//Query Selector

/* var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';
var input = document.querySelector('input');
input.value='Hola mundo';
var submit = document.querySelector('input[type="Submit"]');
submit.value= 'Enviar';

var item= document.querySelector('.list-group-item');
item.style.color='red';*/

//// Consulta por selectores ////

/*Query Selector All
 var items = document.querySelectorAll('.list-group-item');
items[2].style.color= 'red';

var titulos = document.querySelectorAll('.title');
console.log(titulos)
titulos[0]. textContent = 'Prueba';

var impar = document.querySelectorAll('li:nth-child(odd)');
var par = document.querySelectorAll('li:nth-child(odd)');
for (var i=0; i<impar.length; i++){
    impar[i].style.backgroundColor = '#ccc';
    par[i].style.backgroundColor = '#ddd';
}
*/


//// Elementos y nodos padre ////


//Parent Node sirve para seleccionar varias "cosas" al mismo tiempo y no pasar tanto tiempo editando uno a uno
//ParentNode
/*var itemlist = document.querySelector('#items');
console.log(itemlist.parentNode);
var main= itemlist.parentNode;
main.style.backgroundColor ='#f4f4f4';
console.log(main.parentNode.parentNode);*/



//ParenElement
/*var itemlist = document.querySelector('#items');
console.log(itemlist.parentElement);
var main= itemlist.parentElement;
main.style.backgroundColor ='#f4f4f4';
console.log(main.parentElement.parentElement);*/


////Elemento y nodos hijos ////

//Child Nodes (Hijos)

//LA sihuiente linea de código sirve para los iguientes ejemplos de itemlist
//var itemlist = document.querySelector('#items');
//console.log(itemlist.childNodes);

//children
//console.log(itemlist.children);

//firstChild/firstElementChild
//console.log(itemlist.firstElementChild);
//itemlist.firstElementChild.textContent ="Hola";
//LastChils
//console.log(itemlist.lastElementChild);
//itemlist.lastElementChild.textContent ="Hola";

////Elementos y nodos hermanos////

//PreviousSibling
//console.log(itemlist.previousSibling);

//PreviousElementSibling

//console.log(itemlist.previousElementSibling);

//nextSibling

//console.log(itemlist.nextSibling);

//nextElementSibling

//console.log(itemlist.nextElementSibling);

//// Crear elementos y nodos ////


//Create element
/*var nuevodiv = document.createElement('div');
nuevodiv.className='Hola';
nuevodiv.id= 'div-hola';
nuevodiv.setAttribute('title', 'hola mundo');


//createTextNode

var nuevonodoText = document.createTextNode('Hola mundo');
nuevodiv.appendChild(nuevonodoText);
console.log(nuevodiv);
var contenedor = document.querySelector('.container');
console.log(contenedor)

var h1 = document.querySelector('h1');
console.log(h1);

contenedor.insertBefore(nuevodiv, h1); */

//// Eventos ////

/* document.getElementById('boton').addEventListener('click', hacerclick);


document.getElementById('boton').addEventListener('click', hacerclick)


function hacerclick(){
    //console.log('Usted ha hecho click')
    document.getElementById('header-title').textContent= 'Texto Cambiado';
}

 */



//// Cambiando el diseño del sitio (se vio en html) ////


//// Agregar elementos a la lista ////

var form = document.getElementById('formAgregar');
var lista = document.getElementById('items');
var filtro= document.getElementById('filtro');

//Evento submit del formulario
form.addEventListener('submit', agregarItem);
//Evento click de la lista
lista.addEventListener('click', eliminarItem);
//Evento de teclado en el campo de filtro
filtro.addEventListener('keyup', filtrarItems);
//funcion para agregar item a la lista
function agregarItem(e){
    e.preventDefault();
    var newItem= document.getElementById('item').value;


    //Ingresar datos y recogerlos en consola
    var li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));

    var botonDel = document.createElement('button');
    botonDel.className='btn btn-danger btn-sm float-right eliminar';
    botonDel.appendChild(document.createTextNode('X'));
    li.appendChild(botonDel);
    lista.appendChild(li);
}
//Función para eliminar item de la lista
//e=objeto
function eliminarItem(e){
    if (e.target.classList.contains('eliminar')){
        if(confirm('¿Seguro que desea eliminar el elemento')){
            var li = e.target.parentElement;
            lista.removeChild(li);
        }
    }
}
//Función para filtrar elemento de la lista
function filtrarItems(e){
    var texto = e.target.value.toLowerCase();
    var items = lista.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemNombre = item.firstChild.textContent;
    ````    if(itemNombre.toLowerCase().indexOf(texto) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
}















//
