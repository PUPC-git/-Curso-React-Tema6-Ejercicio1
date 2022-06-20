/* Mensajes.view.jsx */
import React, { useState } from 'react';
import './Mensajes.view.scss';
import MensajesHeader from '../../components/MensajesHeader/MensajesHeader.component';
import MensajesTable from '../../components/MensajesTable/MensajesTable.component';

export default function Mensajes() {
    const [mensajes, setMensajes] = useState([]);

    let nuevoMensaje = (object) => {
        console.log('entramos');
        console.log(object);
        let nuevo = {
            "asunto": "yyyy",
            "email": "email@email.com",
            "mensaje": `Este es un mensaje de prueba... ${Math.random()}`,
            "leido": false
        };
        setMensajes(mensajes => [...mensajes, nuevo]);
    };

    let eliminarMensajes = () => {
        setMensajes([]);
    }

    let eliminarMensaje = (index) => {
        mensajes.splice(index, 1);
        setMensajes([...mensajes]);
    }

    let leerMensaje = (index) => {
        mensajes[index].leido = !mensajes[index].leido;
        setMensajes([...mensajes]);
    }

    return (
        <div className="Mensajes">
            <MensajesHeader clickNuevo={nuevoMensaje} clickEliminar={eliminarMensajes}></MensajesHeader>
    
            <MensajesTable mensajes={mensajes} clickEliminarUno={eliminarMensaje}
            clickMarcarLeido={leerMensaje}></MensajesTable>
        </div>
    );
}