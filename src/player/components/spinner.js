import React from 'react';
import './spinner.css';

function Spinner (props){
    if(!props.active) return null
    //si no esta activo no se renderea el spinner
    return(
        <div className='Spinner'>
            <span>Cargando...</span>
        </div>
    )
}
export default Spinner