
//añado un evento para obtener las coordenadas del raton
document.addEventListener("mousemove", function(event)
{
    let px = event.clientX;
    let py = event.clientY;
    
    let nx = event.pageX;
    let ny = event.pageY;

    muestraInformacion(["raton", `pagina[${px}, ${py}]`,`navegador [${nx}, ${ny}]`]);
})

document.addEventListener("keydown", function(event)
{
    let k = event.key

    muestraInformacion(k);
})



function muestraInformacion(mensaje)
{
	document.getElementById("info").innerHTML = '<h1>'+mensaje[0]+'</h1>';
	for(var i=1; i<mensaje.length; i++)
    {
		document.getElementById("info").innerHTML += '<p>'+mensaje[i]+'</p>';
	}
}