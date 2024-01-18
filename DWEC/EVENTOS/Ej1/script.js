

for (let i =1; i<=3;i++){
    // Se selecciona un elemento HTML con un ID específico utilizando la plantilla de cadena y se le asigna un evento de clic.
    document.getElementById(`enlace_${i}`).addEventListener("click", () => mostrarOcultar(i));
}


//creo la funcion para que se muestre o oculte el contenido
function mostrarOcultar(n){
    //como le paso un numero (n) obtengo el parrafo y el enlace a traves de este
    let p = document.getElementById(`contenidos_${n}`);
    let enlace = document.getElementById(`enlace_${n}`);

    //si el parrafo seleccionado no se muestra, cambio el display a bloque y el texto del enlace para que se sepa que se puede ocultar el contenido
    if(p.style.display ==="none")
    {
        p.style.display ="block";
        enlace.textContent = "ocultar contenido";
    }
    
    //encaso contrario si el contenido se esta mostrando lo oculta  y cambia el texto del nlace para que se saber cual es el contenido que se muestre
    else
    {
        p.style.display = "none";
        enlace.textContent = `contenido numero ${n}`;
    }
}