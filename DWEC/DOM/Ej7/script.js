function calcular()
{
    
    //obtengo los valores numericos desde el documento con un parseInt
    var v1 = parseInt(document.getElementById('valor1').value);
    var v2 = parseInt(document.getElementById('valor2').value);

    //obtengo los valores del checkbox
    var checkboxSuma = document.getElementById('suma');
    var checkboxResta = document.getElementById('resta');

    //obtengo el valor del parrafo
    var p = document.getElementById('resultado');

    //con diferentes if y else compruebo si los cuales son los checkboxes que estan marcados para despues mostrar el resultado en el parrafo del documento html
    if(checkboxSuma.checked && checkboxResta.checked)
    {
        p.innerHTML = `La suma es ${v1 + v2} , la diferencia es ${v1-v2}`;
    }
    else if(checkboxSuma.checked)
    {
        p.innerHTML = `la suma es ${v1+v2}`;
    }
    else if(checkboxResta.checked)
    {
        p.innerHTML = `la diferencia es ${v1-v2}`;
    }
}