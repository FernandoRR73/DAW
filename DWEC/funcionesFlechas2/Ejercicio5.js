const decimalToBinary = (decimal) => {
    if (isNaN(decimal) || decimal < 0 || !Number.isInteger(decimal)) {
        return "Ingrese un número entero positivo.";
    }

    return decimal.toString(2);
};

const decimalNumber = 97652156;
const binaryResult = decimalToBinary(decimalNumber);
console.log(`El número binario para ${decimalNumber} es: ${binaryResult}`);