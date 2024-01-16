function comprobar(){

    //obtengo los elementos email y url del documento html
    var email = document.getElementById("email").value;
    var url = document.getElementById("url").value;

    //obtengo los elementos r1(resultado 1) y r2(resultado2) del documento html
    var r1 = document.getElementById("resultado1");
    var r2 = document.getElementById("resultado2");



    var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    /*
        creo el patron para validar un correo electronico
        - ^ - inicio de cadena
        - [^\s@]+ - uno o mas caracteres que no son espacios en blanco ni el simbolo @
        - @ - simbolo '@'
        - \. - el punto que separa el dominio
        - [^\s@]+ - uno o mas caracteres que no son espacios en blanco ni el simbolo @
        - $ - final de la cadema
    */

    var regexUrl = /^(https?:\/\/www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=%]*)?$/
        /*
            - ^ - Inicio de la cadena
            - (https?:\/\/www\.)? - grupo opcional que permite un protocolo "http" o "https" con o sin www
            - [a-zA-Z0-9-]+ - uno o mas caracteres alfanumericos o guiones
            - \. - el punto que separa el dominio
            - [a-zA-Z]{2,} - al menos dos caracteres alfabetico para el dominio de nivel superior(TLD)
            - (\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=%]*)? - ruta opcional despues del dominio
            - $ - final de la cadena
        */


    //comprobacion a traves del patron si el corre itroducido es correcto
    if (regexCorreo.test(email)) {
        r1.innerHTML = "correcto";
    } else {
        r1.innerHTML = "incorrecto";
    }

    //comprobacion a traves del patron si la url introducida es correcta
    if (regexUrl.test(url)) {
        r2.innerHTML = "correcto";
    } else {
        r2.innerHTML = "incorrecto";
    }
}