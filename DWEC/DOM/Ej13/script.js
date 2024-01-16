

//creo un bucle para crear los checkbox
for(var i =0;i<100;i++)
{
    //creo una variable numero random para darle nombre a los checkbox
    var numeroRandom = Math.floor(Math.random() * 1000);

    //creo elemento input y le doy el tipo checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // inserta en el body los checkbox con el numero random creados
    document.body.innerHTML +=`${checkbox.outerHTML}${numeroRandom}`;
}

function marcarTodos()
{
    //obtengo todos los elementos input del documento y los incluyo en una lista
    var checkbox = document.getElementsByTagName("input");

    //recorro la lista
    for(var i=0; i< checkbox.length;i++)
    {
        //si el elemento actual es del tipo checkbox lo chequeo
        checkbox[i].type = "checkbox";
        checkbox[i].checked = true;
    }
}

function desmarcarTodos()
{
    //obtengo todos los elementos input del documento u los incluyo en una lista
    var checkbox = document.getElementsByTagName("input");
    
    //recorro la lista
    for(var i=0; i< checkbox.length;i++)
    {
        //si el elemento actual es del tipo checkbox le quito el checked
        checkbox[i].type = "checkbox";
        checkbox[i].checked = false;
    }
}