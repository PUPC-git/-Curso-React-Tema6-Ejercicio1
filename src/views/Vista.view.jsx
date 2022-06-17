import React, { useState } from 'react';
import LoginButton from '../components/LoginButton.component';
import LogoutButton from '../components/LogoutButton.component';

export default function Vista() {
    const [acceso, setAcceso] = useState(true);
    const [mensajeSinLeer, setMensajeSinLeer] = useState(0);

    let addMensajeSinLeer = () => { setMensajeSinLeer(mensajeSinLeer + 1); }

    let accederLogin = () => { setAcceso(true); };
    let accederLogout = () => { setAcceso(false); }

    let boton;

    if(acceso) 
       boton = <LogoutButton onClick={accederLogout}/>
    else 
       boton = <LoginButton onClick={accederLogin}/>

    return (
        <div> {boton} 
            {mensajeSinLeer > 0 &&
                <p>Tienes {mensajeSinLeer} mensajes sin leer... </p>
            }
            {mensajeSinLeer > 0 ?
                (<p>Tienes {mensajeSinLeer} mensajes sin leer... </p>) :
                (<p>No tienes mensajes sin leer...</p>)
            }
            <button onClick={addMensajeSinLeer}>Sumar 1 mensaje</button>
        </div>
    );
}

