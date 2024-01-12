//1. que en el tercer párrafo haya un enlace con el texto "+ info" creado con javacript y que enlace a http://www.iesromerovargas.com/

//creo una lista con todos los parrafos
const parrafos = document.querySelectorAll('p');

//creo el elemento a 'enlace'
var elemento = document.createElement('a');

//añado el atributo href con el enlace a http://www.iesromerovargas.com/ al elemento
elemento.setAttribute('href', 'http://www.iesromerovargas.com/')

//creo el nodo de texto para añadirlo al elemento
var texto = document.createTextNode("+ info");

//añado el el texto al elemento
elemento.appendChild(texto);

//añado el elemento al final del parrafo
parrafos[2].appendChild(elemento);


//2.inserta un párrafo de color rojo entre el tercer y el cuarto párrafos

var nvParrafo = document.createElement('p');
nvParrafo.textContent = "este parrafo es de color rojo";
nvParrafo.style.color='red';

var cParrafo = document.getElementsByTagName('p')[3];

cParrafo.parentNode.insertBefore(nvParrafo, cParrafo);

//elimina el segundo párrafo [1]

var sParrafo = document.getElementsByTagName('p')[1];

sParrafo.parentNode.removeChild(sParrafo);




