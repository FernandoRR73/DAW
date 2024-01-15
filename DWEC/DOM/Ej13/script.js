for(var i =0;i<100;i++)
{
    var numeroRandom = Math.floor(Math.random() * 1000);

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    document.body.innerHTML +=`${checkbox.outerHTML}${numeroRandom}`;
}

function marcarTodos()
{
    var checkbox = document.getElementsByTagName("input");
    for(var i=0; i< checkbox.length;i++)
    {
        checkbox[i].type = "checkbox";
        checkbox[i].checked = true;
    }
}

function desmarcarTodos()
{
    var checkbox = document.getElementsByTagName("input");
    for(var i=0; i< checkbox.length;i++)
    {
        checkbox[i].type = "checkbox";
        checkbox[i].checked = false;
    }
}