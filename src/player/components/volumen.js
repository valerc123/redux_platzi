import React from 'react';
import VolumenIcon from '../../icons/components/volumen'
import './volumen.css'

function Volumen(props)
{
    return(
        <div className="Volumen">
            <div onClick={props.handleVolumenClick} >
            <VolumenIcon
                color="white"
                size={25}
                />
            </div>
            <div className="Volumen-range">
                <input
                 type="range"
                 min={0}
                 max={1}
                 step={.05} //el rango que se irá moviendo .05
                 onChange={props.handleVolumenChange}
                  />
            </div>
        </div>
    )
}
export default Volumen;
// volumen funciona de 0 a 1