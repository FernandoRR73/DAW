

//le paso el parrafo que clickeo y le cambio el diplay para ocultarlo
function ocultar(parrafo) {
    parrafo.style.display = "none";
}

//le paso el parrafo al que le hago docle click para eliminarlo
function eliminar(parrafo){
    parrafo.remove();
}

//le paso los parrafos para que los vuelva a hacer visibles
function reaparecer() {
    var parrafos = document.getElementsByTagName("p");
    for (var i = 0; i < parrafos.length; i++) {
        parrafos[i].style.display = "block";
    }
}