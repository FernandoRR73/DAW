function calculaCaracteres() {
    
    //obtiene el area de texto del documento
    var textArea = document.getElementById("comentarios");

    //obtiene la longitud maxima a traves del atributo maxlength asignada al area de texto en el documento
    var maxChar = parseInt(textArea.getAttribute("maxlength"));

    //creo un contador que se va mostrando en el documento
    var cont = document.getElementById("resultado");

    //restando al maximo de caracteres la cantidad de caracteres que llevamos escritos en el area de texto obtenemos los caracteres que nos quedan por escribir
    var charRest = maxChar - textArea.value.length;

    //igualo el contador a los caracteres que me quedan para que se muestre la cantidad que falta
    cont.textContent = charRest;
}