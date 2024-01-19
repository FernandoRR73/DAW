

//creo un evento para comprobar la parte de la ventala en la que se clickea
document.addEventListener("click", function(event) {

    //a traves de la funcion dada tamanoVentanaNavegador obtengo el tamaño de la ventana
    const tamanoVentana = tamanoVentanaNavegador();

    //teniendo el ancho y alto de la ventana puedo obtener la mitad del ancho y del alto
    const mitadAncho = tamanoVentana[0] / 2;
    const mitadAlto = tamanoVentana[1] / 2;

    let cuadrante;
    
    //con una serie de condiciones if y else compruebo en que mitades se a pulsado
    if(event.clientY < mitadAlto && event.clientX < mitadAncho){
        cuadrante = "Arriba izquierda";
    }else if(event.clientY < mitadAlto && event.clientX > mitadAncho){
        cuadrante = "Arriba derecha";
    }else if(event.clientY > mitadAlto && event.clientX > mitadAncho){
        cuadrante = "Abajo derecha";
    }else{
        cuadrante = "Abajo izquierda";
    }

    //muestra en el elemento info del documento html en que cuadrante se a pulsado
    document.getElementById("info").innerHTML = `Has hecho clic en: ${cuadrante}`;
});


function tamanoVentanaNavegador(){
	// Adaptada de http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
	var dimensiones = [];
	
	if(typeof(window.innerWidth) == 'number') {
		// No es IE
		dimensiones = [window.innerWidth, window.innerHeight];
	} else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
		//IE 6 en modo estandar (no quirks)
		dimensiones = [document.documentElement.clientWidth, document.documentElement.clientHeight];
	} else if(document.body && (document.body.clientWidth || document.body.clientHeight)) {
		//IE en modo quirks
		dimensiones = [document.body.clientWidth, document.body.clientHeight];
	}
	
	return dimensiones;
}

