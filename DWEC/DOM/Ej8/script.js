function calculo()
{
    //obtengo los valores numericos
    var v1 = parseInt(document.getElementById('valor1').value);
    var v2 = parseInt(document.getElementById('valor2').value);

    //obtengo los valores del select
    var op = document.getElementById('operacion');
    var selectOp = op.value;

    var r1 = document.getElementById('resultado1');

    //mediante una condicion muestro la suma o la resta por en el documento html
    if (selectOp === "suma")
    {
        r1.innerHTML = `La suma es ${v1 + v2}`;
    }
    else
    {
        r1.innerHTML = `la diferencia es ${v1 - v2}`;
    }
}

function calculoMultiple() {


    //obtengo los valores numericos
    var num1 = parseInt(document.getElementById("valor1").value);
    var num2 = parseInt(document.getElementById("valor2").value);


    //obtengo las opciones del select multiple
    var operaciones = document.getElementById("operaciones");
    var sOperaciones = operaciones.options;

    //creo un array para guardar las diferentes opciones marcadas en el select
    var operacionesElegidas = [];

    var r2 = document.getElementById("resultado2");

    //con un bucle for recorro las operaciones que estan seleccionadas y las añado al array de las operaciones elegidas
    for (var i = 0; i < sOperaciones.length; i++) {
        
        if (sOperaciones[i].selected) {

            operacionesElegidas.push(operaciones[i].value);

        }
    }

    //muestra las operaciones elegiadas por pantalla
    if(operacionesElegidas.includes("suma") && operacionesElegidas.includes("resta")){

        r2.innerHTML = `La suma es ${num1 + num2} - La diferencia es ${num1 - num2}`;

    }else if(operacionesElegidas.includes("suma")){

        r2.innerHTML = `La suma es ${num1 + num2}`;

    }else{

        r2.innerHTML = `La diferencia es ${num1 - num2}`;
        
    }
}