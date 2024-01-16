# Ejercicio 2

- A partir de la página web proporcionada (Ej2.html) y utilizando las funciones DOM, mostrar 
por pantalla la siguiente información:

1. Número de enlaces de la página 
2. Dirección a la que enlaza el penúltimo enlace 
3. Numero de enlaces que enlazan a http://prueba 
4. Número de enlaces del tercer párrafo 

    - document.querySelectorAll(), crea una lista con todos los elementos elementos del tipo que se le pase entre los parentesis, por ejemplo document.querySelectorAll('a') obtiene todos los enlaces del documento html

    - .getAttribute(), obtiene el valor especifico del atributo de un elemento por ejemplo, enlace.getAttribute("href") obtiene el valor del atriuto href del elemento enlace

    - console.log(), muestra en la consola el contenido incluido dentro de los parentesis, por ejemplo console.log("hola mundo"), muestra por la consola hola mundo