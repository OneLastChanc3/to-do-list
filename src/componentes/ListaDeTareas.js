import React, { useState } from "react";
import TareaFormulario from '../componentes/TareaFormulario'
import '../hoja-de-estilos/ListaDeTareas.css'
import Tarea from "./Tarea";

function ListaDeTareas() {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea ,...tareas];//spreed array
            setTareas(tareasActualizadas);
        }
     }
     
    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !==id);
        setTareas(tareasActualizadas);
    }

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if(tarea.id === id) {
                tarea.compleada = !tarea.compleada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas)
    }


     return (
        <div>
            <TareaFormulario onSubmit= {agregarTarea}></TareaFormulario>
            <div className='tarea-contenedor'>
                {
                    tareas.map(tarea  => 
                    <Tarea
                    key={tarea.id}
                    id={tarea.id} 
                    texto={tarea.texto}
                    completada={tarea.completada}
                    completarTarea={completarTarea}
                    eliminarTarea={eliminarTarea}
                    ></Tarea>)
                }
            </div>
        </div>
     );
  }



export default ListaDeTareas;