'use strict'

//Fetch y peticiones a servicios api rest

var divUsuarios = document.querySelector("#usuarios");
var divJanet = document.querySelector("#janet");
var divProfesor = document.querySelector("#profesor");

    getUsuarios()
        .then(data => data.json())
        .then(users => {
        listadoUsuarios(users.data);

            return getInfo();


        })
        .then(data =>{
divProfesor.innerHTML = data;
return getJanet();

        })
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data);
        })
        .catch(error => {
            alert("Error en las peticiones");
        });





function getUsuarios (){
  return  fetch('https://reqres.in/api/users?page=2');
};


function getJanet (){
    return  fetch('https://reqres.in/api/users/2');
};



function getInfo(){
    var profesor = {
        nombre : "Edwin",
        apellidos : "Romero",
        url: "cuevafriki.com"
    };
    return new Promise((resolve, reject) => {
        var profesor_string = "";
        setTimeout(function (){
            profesor_string = JSON.stringify(profesor);
            if (typeof profesor_string != 'string' || profesor_string == "" ) return reject('error 1212');

            return resolve(profesor_string);
        }, 3000);



    });





}

function listadoUsuarios (usuarios){
    usuarios.map((users, i) => {
        let nombre = document.createElement('h2');
        nombre.innerHTML = i + ". " + users.first_name + " " + users.last_name;
        divUsuarios.appendChild(nombre);
        document.querySelector(".loading").style.display = "none";
    });

};


function mostrarJanet (user){
    console.log(user)
        let nombre = document.createElement('h4');
        let avatar = document.createElement('img');

        nombre.innerHTML = user.first_name + " " + user.last_name;
        avatar.src = user.avatar;
        avatar.width = '100';

        divJanet.appendChild(nombre);
        divJanet.appendChild(avatar);

    document.querySelector("#janet .loading").style.display = "none";
    };