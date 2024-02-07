const calcularPrecioConIVA = (precio, iva = 21) => {
    // Calcula el precio con IVA incluido
    const precioConIVA = precio + (precio * (iva / 100));
    return precioConIVA;
};

// Ejemplo de uso
const precioSinIVA = 100;
const ivaPersonalizado = 10; // Puedes cambiar este valor para probar diferentes IVAs
const precioConIVA = calcularPrecioConIVA(precioSinIVA, ivaPersonalizado);
console.log(`El precio con IVA incluido es: ${precioConIVA.toFixed(2)}`);
