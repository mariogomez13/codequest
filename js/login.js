document.getElementById("sendLogin").addEventListener("click", cargarUsuarios);

$(function() {
    inicializarEventos();
    console.log("Documento cargado");
});

inicializarEventos = () => {
    console.log("Eventos inicializados");
    var userStoraged = localStorage.getItem("usuario");
    var passStoraged = localStorage.getItem("pass");
    var usuario = $("#correo");
    var contra = $("#pass");
    usuario.val(userStoraged);
    contra.val(passStoraged);
    console.log(usuario);
}


function cargarUsuarios() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../json/usuarios.json", true);
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            data = JSON.parse(xhr.responseText);
            console.log("Datos enviados a la funcion iniciarSesion")
            console.log(data);
            // return data;
            iniciarSesion(data);
        } else {
            console.error("Error al cargar los datos: " + xhr.status);
        }
    };
    
    xhr.onerror = function () {
        console.error("Error de red al cargar los datos.");
    };
    xhr.send();
}


iniciarSesion = (data) => {
    console.log(data);
    var user = $("#correo").val();
    var pass = $("#pass").val();
    localStorage.setItem("usuario", user);
    localStorage.setItem("pass", pass);
    var resultado = false;

    for (var i=0; i<data.usuarios.length; i++) {
        if (user == data.usuarios[i].correo && pass == data.usuarios[i].contrasenia) {
        //if (user == "m@m.es") {
            resultado=true;
            i=5;
            window.location = "index.html";
        } else {
            resultado=false;
        }


    }
}