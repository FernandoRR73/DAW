const textoAlReves = (texto) => {
    // Divide el texto en un array de caracteres, invierte el orden del array y luego lo une de nuevo en un string
    return texto.split('').reverse().join('');
};

// Ejemplo de uso
const textoOriginal = "Hola mundo";
const textoReverso = textoAlReves(textoOriginal);
console.log(`El texto original es: ${textoOriginal}`);
console.log(`El texto al revés es: ${textoReverso}`);