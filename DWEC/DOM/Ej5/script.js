function enviarSaludo()
{

    //obtengo el nombre del formulario 
    var nombre = document.getElementById("nombre").value;

    //obtengo el apellido del formulario
    var apellido = document.getElementById("apellido").value;

    //creo el texto con el saludo personalizado añadiendo el nombre y el apellido de la persona que ingresa en la pagina
    var texto = "bienvenido a la pagina " + nombre + " " + apellido;

    //muestro el mensaje de saludo en el parrafo con el id="saludo"
    document.getElementById("saludo").textContent = texto;
}