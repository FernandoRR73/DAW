

//creo una lista con todos los enlaces
var enlaces = document.querySelectorAll("a");

//recorro la lista de enlaces
for(i = 0; i<enlaces.length; i++)
{
    // compruebo si el atributo href comienza con http://
    if (enlaces[i].href.startsWith("http://")) 
    {
        // Cambia el protocolo a https
        enlaces[i].href = enlaces[i].href.replace("http://", "https://");
    }
}

//creo un contador para el numero de enlaces importantes
var cont = 0;

//recorro la lista de enlaces
for(i=0;i<enlaces.length;i++)
{
    //compruebo si el enlace contiene la clase importante
    if(enlaces[i].classList.contains("importante"))
    {
        //añado al enlace el atributo name ="importante + cont"
        enlaces[i].setAttribute("name",`importante ${cont}`);

        //sumo uno al contador
        cont++;
    }
}


//creo una lista con los parrafos
var parrafos = document.querySelectorAll("p");

//recorro la lista de los parrafos
for(i=0; i<parrafos.length; i++)
{
    //compruebo si el parrafo contiene la clase importante
    if(parrafos[i].classList.contains("importante"))
    {
        //elimino la clase inportante
        parrafos[i].classList.remove("importante");
        //añado la clase resaltado
        parrafos[i].classList.add("resaltado");
    }
    //si no contiene la clase importante, le añado la clase normal
    else
    {
        parrafos[i].classList.add("normal");
    }
}

