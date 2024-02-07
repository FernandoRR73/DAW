const obtenerPrimerosVeintePares = () => {
    let numerosPares = [];
    let contador = 0;
    let numeroActual = 2; // Comenzamos con el primer número par

    // Mientras aún no hayamos agregado 20 números pares al array
    while (contador < 20) {
        numerosPares.push(numeroActual); // Agregamos el número par actual al array
        numeroActual += 2; // Incrementamos en 2 para obtener el siguiente número par
        contador++; // Incrementamos el contador
    }

    return numerosPares;
};

const primerosVeintePares = obtenerPrimerosVeintePares();
console.log(primerosVeintePares);
