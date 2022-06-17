import React, { useState } from 'react';
import './MensajesHeader.component.scss';
import '../../views/Mensajes/Mensajes.view'

export default function MensajesHeader(props) {  
  const [asunto, setAsunto] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  let mensajeNuevo = (values) => {
    setAsunto(values.asunto);
    setEmail(values.email);
    setMensaje(values.mensaje);
  }

  return (
    <div className="MensajesHeader">
        {/* si todo este codigo lo meto en un form genera un bucle, pero nunca se queda nada pintado*/}
        {/*<form>*/}
        <input className="Asunto" placeholder="Introduce tu nombre..." type="text"
          name="asunto"/>
          <input className="Email" placeholder="Introduce tu email..." type="text"
          name="email"/>
          <input className="Mensaje" placeholder="Introduce tu mensaje..." type="text"
          name="mensaje"/>

        {/* esta linea si la descomento me genera un bucle infinito sacando los datos de nuevoMensaje de la view*/}
        {/*<button onClick={props.clickNuevo(mensajeNuevo)} className="Nuevo">Nuevo</button>*/}
        
        <button onClick={props.clickNuevo} className="Nuevo">Nuevo</button>
        <button onClick={props.clickEliminar} className="Vaciar">Vaciar</button>  
        {/*</form>*/}
    </div> 
  );
}