function anade()
{
    var numeroRandom = Math.floor(Math.random() * 101);


    // obtengo la lista desde el documento y la meto en una variable
    var lista = document.getElementById("lista");

    //crea un elemento HTML especificando su etiqueta, en este caso <li>
    var elemento = document.createElement("li");

    //con createTextNode creo una cadena para darle contenido al elemnto creado, ademas se añade el nLineas para saber cuantas lineas van creadas
    var texto = document.createTextNode("nuevo elemento" + numeroRandom);

    /*
        con el elemento creado se usa appendChild para añadir un hijo(<li>) a un elemento padre(<ul>), quedando de la siguiente forma

        <ul>
            <li>
            <li>
            <li>
            <li>
            --la suguiente linea se añade en esta posicion y de aqui hacia abajo--
        </ul>
    */
    elemento.appendChild(texto);
    lista.appendChild(elemento);
}