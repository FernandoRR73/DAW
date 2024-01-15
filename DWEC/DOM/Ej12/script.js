cont  = 0;
var table = document.getElementById("table");
for (var i =0;i<100; i++)
{
    var fila = document.createElement("tr");

    for(var j = 0; j<100; j++)
    {
        var celda = document.createElement("td");
        if(numeroCasiPrimo(cont))
        {
            celda.textContent = cont
            celda.style.background ="yellow";
        }
        else
        {
            celda.textContent = cont;
        }
        fila.appendChild(celda);
        cont ++;
    }
    table.appendChild(fila);
}


function numeroCasiPrimo(numero)
{
    var div = 0;
    for(var i = numero; i>0; i--)
    {
        if(numero%i == 0)
        {
            div ++;
        }
    }
    if (div === 3)
    {
        return true;
    }
    else{return false}
}