# ejercicio 5

Dado el código HTML a continuación (Ej5.html), termina de rellenarlo para tras rellenar los 
campos de nombre y apellido y hacer clic en enviar datos aparezca por pantalla el texto «hola 
nombre apellidos, gracias por rellenar el formulario»

- document.getElementById().value obtiene el valor del elemento con el id incluido dentro de los parentesis, por ejemplo

    <p id="parrafo">nombre<p>

document.getElementById("parrafo").value obtendria el valor de p es decir nombre

- .textContent = , modifica el valor de un elemento html , por ejemlo document.getElementById("parrafo").textContent = "hola", mostraria el siguiente resultado

    <p id="parrafo">hola<p>