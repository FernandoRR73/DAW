
//obtener texto del documento
const text = new DOMParser().parseFromString(document.documentElement.innerHTML, 'text/html');
/*¡¡¡¡DOMParser  parsea el contenido del fichero en una cadena de texto!!!!!!*/



//---1.Numero de enlaces de la pagina -------------------------------------------------------------------------------



// saber la cantidad de enlaces que hay en el fichero html
const nEnlaces = text.querySelectorAll('a').length;
/*¡¡QuerySelectorAll devuelve una lista de los elementos del documento que coinciden con el grupo de selectores indicados!!!*/

//mostrar por consola el numero de enlaces que hat en el fichero
console.log('en el fichero hay: ' + nEnlaces + ' enlaces');



//----2.Direccion a la que enlaza la penultima pagina --------------------------------------------------------------------------------



//crea una lista llamada enlaces 
const enlaces = text.querySelectorAll('a');
if (enlaces.length >=2)
{
    const pEnlace = enlaces[enlaces.length-2].getAttribute('href');

    console.log("la direccion a la que enlaza el penultimo enlace es: " + pEnlace);

    /*
        pEnlace: es la variable donde se guarda el penultimo enlace

        enlaces[enlaces.length-2]: accede a la penultima posicion de la lista para poder obterner el enlace

        .getAttribute('href'): obtiene el valor del atributo href, es decir el la direccion del enlace
    */
}



//----3.Numero de enlaces a la que enlazan a http://prueba ---------------------------------------------------------------------------------



//creo un contador externo al bucle para llevar la cuenta del numero de veces que se accede al enlace http://prueba
var cont = 0;

//con un bucle for recorro la lista enlaces
for(i = 0; i<enlaces.length; i++)
{
    if(enlaces[i].getAttribute('href') == "http://prueba")
    {
        cont ++;
    }
    /*    
        enlaces[i]: lee la posicion "i" de la lista enlaces
    
        getAttribute('href'): obtiene el valor del atributo href, es decir la direccion del enlace

        if(enlaces[i].getAttribute('href') == "http://prueba"): la direccion del enlace dada con la que queremos comprobar

        cont++: aumenta en uno cada vez que la igualdad se cumple
    */
}

//muestra por consola el numero  de veces que se repite el enlace http://prueba en la el documento
console.log("la pagina tiene " + cont + " enlaces a http://prueba");



//----4. Numero de enlaces del ultimo parrafo ---------------------------------------------------------------------------------


//creo una lista de parrafos y guardo el ultimo en una constante
const parrafo = text.querySelectorAll('p')[2];

//con el parrafo guardado compruebo el numero de enlaces que tiene este dentro
const enlacesUP = parrafo.querySelectorAll('a').length;

//muestro por consola en numero de enlaces en la pagina
console.log("la pagina tiene " + enlacesUP + " enlaces");
