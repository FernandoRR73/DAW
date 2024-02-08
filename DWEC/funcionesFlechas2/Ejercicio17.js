const generarNumerosUnicos = (cantidad, min = 1, max = 1000) => {
    let numeros = new Set();

    // Genera números aleatorios únicos hasta alcanzar la cantidad especificada
    while (numeros.size < cantidad) {
        let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        numeros.add(numeroAleatorio);
    }

    return [...numeros];
};

// Función para mostrar los números por pantalla
const mostrarNumeros = (numeros) => {
    numeros.forEach(numero => {
        console.log(numero);
    });
};

// Generar 100 números aleatorios únicos entre 1 y 1000
const numerosAleatorios = generarNumerosUnicos(100, 1, 1000);

// Mostrar los números por pantalla
console.log("Números aleatorios generados:");
mostrarNumeros(numerosAleatorios);
