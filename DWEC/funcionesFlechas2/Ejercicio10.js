const calcularTiempoRecorrido = (distancia, velocidad) => {
    // Calcular el tiempo en horas (TIEMPO = distancia / velocidad)
    const tiempoEnHoras = distancia / velocidad;

    // Retornar el tiempo en horas
    return tiempoEnHoras;
};

// Ejemplo de uso
const distanciaRecorrida = 120; // en kilómetros
const velocidadAutomovil = 73000; // en kilómetros por hora
const tiempoNecesario = calcularTiempoRecorrido(distanciaRecorrida, velocidadAutomovil);
console.log(`El automóvil tardará aproximadamente ${tiempoNecesario.toFixed(5)} horas en recorrer ${distanciaRecorrida} km.`);
