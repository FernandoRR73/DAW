const obtenerPrimerosDiezFibonacci = () => {
    let fibonacci = [0, 1]; // Inicializamos el array con los dos primeros números de Fibonacci

    // Generamos los siguientes números de Fibonacci
    for (let i = 2; i < 10; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci;
};

// Llamamos a la función para obtener los primeros 10 números de Fibonacci
const primerosDiezFibonacci = obtenerPrimerosDiezFibonacci();
console.log("Los primeros 10 números de Fibonacci son:", primerosDiezFibonacci);
