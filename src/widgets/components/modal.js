import React from "react";
import './modal.css';
// modal
function Modal(props){
    return(
        <div className="Modal">
        {/*this is a modal */}
            {props.children}
            <button 
            onClick={props.handleClick}
            className="Modal-close"
            /> 
        </div> 
    )
}
export default Modal;