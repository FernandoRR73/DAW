const obtenerLetraDNI = (dni) => {
    // Verificar si el DNI es un número de 8 dígitos
    if (isNaN(dni) || dni.toString().length !== 8) {
        return "DNI Erróneo";
    }

    // Calcular la letra del DNI
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const letra = letras.charAt(dni % 23);

    return letra;
};
console.log(obtenerLetraDNI(12345678)); 
console.log(obtenerLetraDNI('12345678'));
console.log(obtenerLetraDNI(123));
console.log(obtenerLetraDNI(123456789)); 