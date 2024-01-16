//creo dos elementos p
var p1 = document.createElement("p");
var p2 = document.createElement("p");

//creo un elemento p para el resultado
var pResultado = document.createElement("p");

//obtengo el contenido del elemento con el id "primero"
var div1 = document.getElementById("primero");

//obtengo el contenido del elemento con el id "segundo"
var div2 = document.getElementById("segundo");

//obtengo el contenido del elemento con el id "resultado"
var divResultado = document.getElementById("resultado");

//agrego p1 al div1 del documento
div1.appendChild(p1);

//agrego p2 al div2 del documento
div2.appendChild(p2);

//agrego pResultado al divResultado del documento
divResultado.appendChild(pResultado);

function genera() {
    
    //genera dos numero aleatorios 
    var numeroAleatorio1 = Math.floor(Math.random() * 100);
    var numeroAleatorio2 = Math.floor(Math.random() * 100);

    //comprueba si los dos dos campos de texto estan vacios
    if (p1.textContent === "" && p2.textContent === "") {

        //agrega los dos numero aleatorios generados a dos campos de texto
        var texto1 = document.createTextNode(numeroAleatorio1);
        var texto2 = document.createTextNode(numeroAleatorio2);

        //agrega los dos campos de texto dos parrafos (p1 y p2), del documento
        p1.appendChild(texto1);
        p2.appendChild(texto2);

        //comprueba si p1 esta vacio
    } else if (p1.textContent === "") {
        
        //lama a la funcion limpiarContenido para eliminar el contenido del p2
        limpiarContenido(p2);

        //llama a la funcion limpiarContenido para eliminar el contenido del pResultado
        limpiarContenido(pResultado);


        //agrega los numero aleatorios generados a dos campos de texto
        var texto1 = document.createTextNode(numeroAleatorio1);
        var texto2 = document.createTextNode(numeroAleatorio2);

        //agrega los campos de texto a p1 y p2
        p1.appendChild(texto1);
        p2.appendChild(texto2);

    
    //comprueba si p2 esta vacio
    } else if (p2.textContent === "") {

        //llamo a la funcion limpiarContenido para eliminar el contenido del p1
        limpiarContenido(p1);
        //llama a la funcion limpiarContenido para eliminar el contenido del pResultado
        limpiarContenido(pResultado);

        //agrego los numeros aleatorios generados a dos campos de texto
        var texto1 = document.createTextNode(numeroAleatorio1);
        var texto2 = document.createTextNode(numeroAleatorio2);

        //agrego los dos campos de texto a p1 y p2
        p1.appendChild(texto1);
        p2.appendChild(texto2);

    }
}

function compara() {

    //parseo los numero que se encuentran en p1 y p2
    var numero1 = parseInt(p1.textContent);
    var numero2 = parseInt(p2.textContent);

    //p1 es mayor o igual a p2
    if (numero1 >= numero2) {

        //llamo a la funcion mover para pasar el numero de p1 a pResultado
        mover(p1);

        //llamo a la funcion limparContenido para eliminar el contenido de p1
        limpiarContenido(p1);

    //p2 mayor a p1
    } else if (numero1 < numero2) {

        //llamo a la funcion mover para pasar el contenido de p2 a pResultado
        mover(p2);

        //llamo a la funcion limpiar contenido para eliminar el contenido de p2
        limpiarContenido(p2);
    }
}

function limpiarContenido(elemento) {

    // bucle que se ejecuta mientras el elemento tenga al menos un hijo
    while (elemento.firstChild) {
        //elimina el primer hijo de cada iteracion
        elemento.removeChild(elemento.firstChild);
    }
}

function mover(parrafo) {

    //creo la variable nuemero con el contenido del parrafo que se le pasa a la funcion
    var numero = parrafo.textContent;
    //creo la variable resulltado que guarda el numero del parrafo como texto
    var resultado = document.createTextNode(numero);

    //agrega el texto creado al elemento pResultado
    pResultado.appendChild(resultado);
    
}