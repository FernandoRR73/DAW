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

document.addEventListener("click",function(event){
    const tamanoVentana = tamanoVentanaNavegador();
    const mitadAncho = tamanoVentana[0] / 2;
    const mitadAlto = tamanoVentana[1] / 2;
    let infor;
    if(event.clientX < mitadAncho && event.clientY < mitadAlto){
        infor = "Arriba Izquierda";
    }
    else{
        if(event.clientX < mitadAncho && event.clientY > mitadAlto){
            infor = "Arriba Derecha";
        }
        else{
            if(event.clientX > mitadAncho && event.clientY > mitadAlto){
                infor = "Abajo Izquierda";
            }
            else{
                infor = "Abajo Derecha";
            }
        }
    }
    document.getElementById("info").innerHTML = `Has clickado en ${infor}`;
})

function muestraInformacion(mensaje) {
	document.getElementById("info").innerHTML = '<h1>'+mensaje[0]+'</h1>';
	for(var i=1; i<mensaje.length; i++) {
		document.getElementById("info").innerHTML += '<p>'+mensaje[i]+'</p>';
	}
}