
function ocultar(parrafo) {
    parrafo.classList.add("oculto");
    parrafo.style.display = "none";
}
function eliminar(parrafo){
    parrafo.remove();
}
function reaparecer() {
    var parrafos = document.getElementsByTagName("p");
    for (var i = 0; i < parrafos.length; i++) {
        parrafos[i].style.display = "block";
    }
}