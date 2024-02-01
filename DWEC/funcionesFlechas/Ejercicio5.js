/*

function Calcular(salarioMensual,comision,lecenciaVendida,totalSalario,totalcomisiones){
    salarioMensual=3500000
    comision=1500000
    lecenciaVendida=4
    totalcomisiones=comision*lecenciaVendida
    totalSalario=((salarioMensual+totalcomisiones)/100)*95
    
    console.log('El salario mensual es de  '+ totalSalario)
}
Calcular()
*/

let salarioMensual = 3500000;
let comision = 1500000;
let licenciaVendida = 4

let calcular = (salarioMensual, comision, licenciaVendida) =>
{
    totalComisiones = comision*licenciaVendida;
    totalSalario =((salarioMensual + totalComisiones)/100)*95;
    return totalSalario;
}
console.log(`El salario mensual es de ${calcular(salarioMensual, comision, licenciaVendida)}`);
