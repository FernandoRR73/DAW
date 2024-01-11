function anade()
{

    // obtengo la lista desde el documento y la meto en una variable
    var lista = document.getElementById("lista");

    //con querySelectorAll obtengo el numero elementos <li> que hay en la lista
    nLineas = document.querySelectorAll("li").length;

    //crea un elemento HTML especificando su etiqueta, en este caso <li>
    var elemento = document.createElement("li");

    //con createTextNode creo una cadena para darle contenido al elemnto creado, ademas se añade el nLineas para saber cuantas lineas van creadas
    var texto = document.createTextNode("elemento nuemero: " + (nLineas + 1));

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