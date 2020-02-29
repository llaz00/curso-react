import * as React from "react";
import './Boton.css';

function Boton(props) {
    return (
        <button onClick={props.onClick} className={'boton ' + props.tipo}>{props.label}</button>
    );
}

export default Boton;
