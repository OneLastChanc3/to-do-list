import React, { useState } from 'react';
import '../hoja-de-estilos/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';//generar id's unicos

function TareaFormulario(props) {
    const [input,setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
    }
    const manejarEnvio = e => {
        e.preventDefault();//evita que se recargue la pagina
        const tareaNueva = {
            id: uuidv4(),
            texto : input,
            completada: false
        }
    
        props.onSubmit(tareaNueva);
        setInput('')
    }
    return(
        <form 
            className='tarea-formulario'
            onSubmit={ manejarEnvio }>
            <input
                className='tarea-input'
                type='text'
                placeholder='Escribe tu tarea'
                name='texto'
                value={input}
                onChange={ manejarCambio }
            ></input>
            <button 
                className='tarea-boton'>
                Agregar Tarea
            </button>
        </form>
    )

}
export default TareaFormulario;
