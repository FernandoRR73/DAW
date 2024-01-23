
//añado un evento para obtener las coordenadas del raton y mostrarlas
document.addEventListener("mousemove", function(event)
{
    //con la funcion coordenadasRaton(funcion creada) obtengo las coordenadas del raton
    let coordenadas = coordenadasRaton(event)

    //obtengo el cuadro donde se muestra la pagina la informacion 
    let cuadro = document.getElementById("info");
    //con el cuadro obtenido cambio el color con la propiedad style.backgroundColor ="color"
    cuadro.style.backgroundColor = "#FFFFFF";

    //llamo a la funcion para mostrar las coordenadas del raton
    muestraInformacion(["raton", `pagina[${coordenadas.pagina}]`,`navegador [${coordenadas.navegador}]`]);
})


//creo un evento para obtener la tecla pulsada y su codigo y mostrarlo
document.addEventListener("keydown", function(event)
{
    //obtengo la tecla pulsada
    let k = event.key;

    //obtengo el codigo de la tecla
    let codek = event.key.charCodeAt(0);

    //obtengo el cuadro donde se muestra la informacion
    let cuadro = document.getElementById("info");

    //con el cuadro de informacion cambio el color con la propiedad style.backgroundColor = "color"
    cuadro.style.backgroundColor = "#CCE6FF";
    
    //llamo a la funcion para mostrar la tecla pulsada y su codigo
    muestraInformacion(["teclado", `caracter[${k}]`, `codigo ${codek}`]);
})


//creo un evento para cambiar el color del cuadro al pulsar el raton
document.addEventListener("mousedown", function(event)
{
    //como hace falta que se muestren las coordenadas del raton, las obtengo por medio de la funcion coordendasRaton(funcion creada)
    let coordenadas = coordenadasRaton(event);

    //obtengo el cuadro donde se muestra la informacion
    let cuadro = document.getElementById("info");
    //cambio el color del cuadro donde se muestra la informacion, con la propiedad .style.backGroundColor = "color"
    cuadro.style.backgroundColor = "#FFFFCC";

    //muestro la informacion del raton por medio de la funcion muestraInformacion
    muestraInformacion(["raton", `pagina[${coordenadas.pagina}]`,`navegador [${coordenadas.navegador}]`]);
})


//creo la funcion muestraInformacion para mostrar los eventos al interactuar con el documento
function muestraInformacion(mensaje)
{
	document.getElementById("info").innerHTML = '<h1>'+mensaje[0]+'</h1>';
	for(var i=1; i<mensaje.length; i++)
    {
		document.getElementById("info").innerHTML += '<p>'+mensaje[i]+'</p>';
	}
}


//creo una funcion para obtener las coordenadas del raton y le paso un evento
function coordenadasRaton(event)
{
    //obtengo las coordenadas x,y de  la pagina
    let px = event.clientX;
    let py = event.clientY;
    
    //obtengo las coordenadas x, y del navegador
    let nx = event.pageX;
    let ny = event.pageY;

    //hago un return de las coordenadas de la pagina y del navegador
    return{
        pagina: [px, py],
        navegador: [nx, ny]
    }
}