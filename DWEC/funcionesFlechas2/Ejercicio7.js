const calcularMedia = (array) => {
    // Verificar si el array está vacío
    if (array.length === 0) {
        return 0;
    }

    // Calcular la suma de todos los elementos del array
    const suma = array.reduce((acumulador, elemento) => acumulador + elemento, 0);

    // Calcular la media
    const media = suma / array.length;

    return media;
};
const arrayEnteros = [10, 20, 30, 40, 50];
const media = calcularMedia(arrayEnteros);
console.log("La media del array es:", media);
