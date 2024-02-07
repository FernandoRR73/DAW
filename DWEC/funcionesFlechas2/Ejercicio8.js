const readline = require('readline');


const obtenerEmpleadoMejorPagado = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let empleadoMejorPagado = { nombre: '', sueldo: Number.NEGATIVE_INFINITY };

    const leerDatosEmpleado = (i) => {
        rl.question(`Ingrese el nombre del empleado ${i}: `, (nombreEmpleado) => {
            rl.question(`Ingrese el sueldo de ${nombreEmpleado}: `, (sueldoEmpleado) => {
                sueldoEmpleado = parseFloat(sueldoEmpleado);
                
                // Verificar si este empleado tiene el sueldo más alto hasta el momento
                if (sueldoEmpleado > empleadoMejorPagado.sueldo) {
                    empleadoMejorPagado.nombre = nombreEmpleado;
                    empleadoMejorPagado.sueldo = sueldoEmpleado;
                }

                if (i < 8) {
                    leerDatosEmpleado(i + 1);
                } else {
                    console.log(`El empleado mejor pagado es ${empleadoMejorPagado.nombre} con un sueldo de ${empleadoMejorPagado.sueldo}.`);
                    rl.close();
                }
            });
        });
    };

    leerDatosEmpleado(1);
};
obtenerEmpleadoMejorPagado();