// document.getElementById("loadData").addEventListener("click", loadData);

$(function() {
    inicializarEventos();
    console.log("Documento cargado");
});

inicializarEventos = () => {
    console.log("Eventos inicializados");
    loadData();
}


function loadData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../json/escapes.json", true);
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            var data = JSON.parse(xhr.responseText);
            console.log("Datos enviados a la funcion cargarNiveles")
            cargarNiveles(data);
        } else {
            console.error("Error al cargar los datos: " + xhr.status);
        }
    };
    
    xhr.onerror = function () {
        console.error("Error de red al cargar los datos.");
    };

    xhr.send();
}

// function displayData(data) {
//     var result = document.getElementById("result");
//     data.forEach(element => {
//         result.innerHTML += "Nombre: " + element.usuario + "<br>Edad: " + element.edad + "<br>"; 
//     });
        
// }

cargarNiveles = (data) => {
    //$("#titulo").text(data.titulo);
    var cardContainer = $(".cards-container");
    var escapesCounter = 1;

    for (const escape of data.escapes) {
        console.log(escape.titulo);

        cardContainer.append("<div class='card-"+ escapesCounter +"'></div>");
        const escapeCard = $(".card-"+ escapesCounter+"");

        escapeCard.append("<div class='cardcontent-"+ escapesCounter +"'></div>");
        const escapeCardContent = $(".cardcontent-"+ escapesCounter);
        
        const escapeCardThumbnail = "<img src='" + escape.miniatura + "' alt=''>";
        const escapeCardTitle = "<h1 class='titulo'>"+ escape.titulo +"</h1>";
        const escapeCardDesc = "<p class='descripcion'>"+ escape.descripcion +"</p>";

        

        
        escapeCardContent.append(escapeCardThumbnail);
        escapeCardContent.append(escapeCardTitle);
        escapeCardContent.append(escapeCardDesc);
        escapeCardContent.append("<div class='button-wrapper'></div>");
        escapeCardContent.append("<button class='btn fill'>JUGAR</button>");
        escapeCardContent.append("<button class='btn outline'>DETALLE</button>");
        escapesCounter ++;
    }

    
}