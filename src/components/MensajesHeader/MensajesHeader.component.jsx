import React, { useState } from 'react';
import './MensajesHeader.component.scss';
import * as Yup from 'yup';
import { Formik } from 'formik';

export default function MensajesHeader(props) {  
  let initialValues = {asunto: '', email: '', mensaje: ''};

  const validaciones = Yup.object().shape({
    asunto: Yup.string().required('Debe introducir un valor en el asunto'),
    email: Yup.string().required('Debe introducir un email'),
    mensaje: Yup.string().required('Debe introducir un mensaje')
  });

  let leerDatos = (event, {setSubmitting}) => {
    let object = {
      asunto: event.asunto,
      email: event.email,
      mensaje: event.mensaje
    }
    console.log(event.asunto);
    console.log(event.email);
    console.log(event.mensaje);
    console.log(`valores.... `);
    console.log(object);

    setSubmitting(false);
  }

  /*
  function object(event) {
   return { asunto: event.asunto,
    email: event.email,
    mensaje: event.mensaje}
  };
  */

  return (
    <div className="MensajesHeader">
        {/* si todo este codigo lo meto en un form genera un bucle, pero nunca se queda nada pintado*/}
        <Formik validationSchema={validaciones} initialValues={initialValues} onSubmit={leerDatos}>

          {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
            <form onSubmit={handleSubmit}>
              <input className="Asunto" placeholder="Introduce tu nombre..." type="text"
              name="asunto" onChange={handleChange}/>
                
              <input className="Email" placeholder="Introduce tu email..." type="text"
              name="email" onChange={handleChange}/>
                
              <input className="Mensaje" placeholder="Introduce tu mensaje..." type="text"
              name="mensaje" onChange={handleChange}/>
                
            {/* esta linea si la descomento me genera un bucle infinito sacando los datos de nuevoMensaje de la view*/}
            {/*<button onClick={props.clickNuevo(mensajeNuevo)} className="Nuevo">Nuevo</button>*/}
            
              <button onClick={props.clickNuevo.object} type="submit" className="Nuevo" disabled={isSubmitting}>Nuevo</button>
              <button onClick={props.clickEliminar} className="Vaciar">Vaciar</button>  
              <br/>
                {errors.asunto ? (<div>{errors.asunto}</div>) : null}
                {errors.email ? (<div>{errors.email}</div>) : null}
                {errors.mensaje ? (<div>{errors.mensaje}</div>) : null}
            </form>
          )}
        </Formik>
    </div> 
  );
}