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

//creo un nuevo parrafo con createElement
var nvParrafo = document.createElement('p');

//le asigno un texto al parrafo con textContent
nvParrafo.textContent = "este parrafo es de color rojo";

//le asigno un color, en este caso rojo, con style.color
nvParrafo.style.color='red';

//obtengo el parrafo numero 4
var cParrafo = document.getElementsByTagName('p')[3];

//inserto el parrafo creado en la posicion anterior al parrafo 4 con insertBefore
cParrafo.parentNode.insertBefore(nvParrafo, cParrafo);

//elimina el segundo párrafo [1]

//obtengo el parrafo el segunfo parrafo
var sParrafo = document.getElementsByTagName('p')[1];

//elimino el segundo parrafo
sParrafo.parentNode.removeChild(sParrafo);




