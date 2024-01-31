import React from 'react';
import '../stylesheets/Testimonio.css';

function Testimonio()
{
    return(
        <div className='contenedor-testimonio'> 
        <img className='imagen-testimonio' src={require('../img/testimonio-2006.webp')} alt='foto japon 2006' width={1200} height={600}/>
            
        <div className='contenedor-texto-testimonio'>
            <p>Foto del gp de japon 2006 con nano a a la cabeza</p>
        </div>
        </div>

    );
};
export default Testimonio;