# Ejercicio 6

Dado  el  código  HTML  (Ej6.html),  muestra  el  código  html  de  un  documento  web  con  5 
párrafos. 
En el interior del script encontrarás las instrucciones: 
1. Que en el tercer párrafo haya un enlace con el texto «+ info» creado con javacript 
y que enlace a http://www.iesromerovargas.com/ 
2. Inserta un párrafo de color rojo entre el tercer y el cuarto párrafos 
3. Elimina el segundo párrafo [1] 


- document.createElement() crea un elemento con la etiqueta que se incluya entre parentesis, por ejemplo document.createElement("p") crea un elemento p (parrafo)

- document.createTextNode() crea un nodo de texto, con el contenido entre parentesis, para incluirlo en una variable, por ejemplo, var nombre = document.createTextNode("fernandorr73"), guarda fernandorr73 como texto dentro de la variable nombre

- .appendChild() se utiliza para agregar un nodo de texto como hijo de otro elemento en el DOM

- .getElementsByTagName() se usa para seleccionar todos los elementos con la etiqueta dada, por ejemplo .getElementsByTagName('p'), selecciona todos los elementos de parrafo \<p> del documento