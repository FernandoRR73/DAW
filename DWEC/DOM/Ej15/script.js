var enlaces = document.querySelectorAll("a");


for(i = 0; i<enlaces.length; i++)
{
    if (enlaces[i].href.startsWith("http://")) 
    {
        // Cambia el protocolo a HTTPS
        enlaces[i].href = enlaces[i].href.replace("http://", "https://");
    }
}

var cont = 0;

for(i=0;i<enlaces.length;i++)
{
    if(enlaces[i].classList.contains("importante"))
    {
        enlaces[i].setAttribute("name",`importante ${cont}`);
        cont++;
    }
}



var parrafos = document.querySelectorAll("p");

for(i=0; i<parrafos.length; i++)
{
    if(parrafos[i].classList.contains("importante"))
    {
        parrafos[i].classList.remove("importante");
        parrafos[i].classList.add("resaltado");
    }
    else
    {
        parrafos[i].classList.add("normal");
    }
}

