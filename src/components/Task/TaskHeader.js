import React, {useState} from 'react';
import Input from '../Input';
import Button from '../Button';

function TaskHeader({onFormSubmit, onDescriptionChange, description, tasks}){
    
    return(
        <header>
            <form onSubmit={onFormSubmit}>
                <Input onChange={onDescriptionChange} type="text" placeholder='Añade una tarea' value={description} />
                <Button type="submit" className="btn btn-success" text="Añadir"/>
            </form>
            <p>Tareas totales registradas: <span>{tasks}</span> </p>
        </header>
    );
}

export default TaskHeader;