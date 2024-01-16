
//creo un contador
cont  = 0;

//obtengo el elemento tabla
var table = document.getElementById("table");

//con un bucle for y dos variables(i y j), creo las las filas y columnas de la tabla
for (var i =0;i<100; i++)
{   
    //creo el elemento fila
    var fila = document.createElement("tr");

    for(var j = 0; j<100; j++)
    {

        //creo el elemento celda
        var celda = document.createElement("td");

        //llamo la funcion numeroCasiPrimo y le paso el contador con el nuemero de la celda, si es casi primo pongo la celda amarilla, sino solo pongo el numero
        if(numeroCasiPrimo(cont))
        {
            celda.textContent = cont
            celda.style.background ="yellow";
        }
        else
        {
            celda.textContent = cont;
        }
        //añado la celda a la fila
        fila.appendChild(celda);
        
        //sumo 1 al contador
        cont ++;
    }
    //añado la fila a la tabla
    table.appendChild(fila);
}



//creo una funcion para obtener si el numero que le paso es casi primo(un numero que solo se puede dividir entre si mismo, 2, y otro numero)
function numeroCasiPrimo(numero)
{
    //creo la variable div(dividendos), para llevar la cuenta de los numeros que dejan resto 0
    var div = 0;

    //con un bucle for divido el numero dado entre todos los menores a el
    for(var i = numero; i>0; i--)
    {
        //si el numero entre uno menor = 0, el contador sube 1
        if(numero%i == 0)
        {
            div ++;
        }
    }

    //si el contador es igual a 3 es casi primo
    if (div === 3)
    {
        return true;
    }
    else{return false}
}