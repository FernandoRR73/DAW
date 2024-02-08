const generarNumeroAleatorio = (min = 1, max = 100) => {
    // Genera un número aleatorio entre min (incluido) y max (excluido)
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Ejemplo de uso
const numeroAleatorio = generarNumeroAleatorio(10, 20); // Genera un número aleatorio entre 10 y 20
console.log(`Número aleatorio generado: ${numeroAleatorio}`);

const numeroAleatorioPorDefecto = generarNumeroAleatorio(); // Genera un número aleatorio entre 1 y 100
console.log(`Número aleatorio por defecto: ${numeroAleatorioPorDefecto}`);
