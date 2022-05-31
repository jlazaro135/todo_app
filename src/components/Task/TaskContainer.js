import React, {useState} from 'react';
import TaskBody from './TaskBody';
import TaskHeader from './TaskHeader';
import {uuid} from '../../utils'

function TaskContainer({
    description, 
    setDescription, 
    tasks, 
    setTask, 
    historyCount, 
    setHistoryCount,
    addTask,
    }){

    [description, setDescription] = useState("");
    [tasks, setTask] = useState([]);
    [historyCount, setHistoryCount] = useState(0);

    function handleChange(e){
        setDescription(e.target.value);
    }
    // function handleSubmit(e){
    //     e.preventDefault();
    //     setTask([...tasks, description]);
    //     setHistoryCount(historyCount + 1);   
    //     setDescription("");
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTask([...tasks, {
            completed: false,
            task: description,
            id: uuid(),
            }]
        );
        setHistoryCount(historyCount + 1);
        setDescription("");
      }

    function taskRemove(indexToDelete){
        const newHistoryCount = historyCount - 1;
        setHistoryCount(newHistoryCount);
        console.log(indexToDelete);
        setTask(function(currentaTasks){
            return currentaTasks.filter((_, index) => index !== indexToDelete)
        })
    }

    function taskDone(indexToDone){
        const clonedTasks = [...tasks];
        const task = clonedTasks[indexToDone];
        task.completed ^= true;
        setTask(clonedTasks);
    }


    return (
        <div className='taskContainer'>
            <TaskHeader onFormSubmit={handleSubmit} onDescriptionChange={handleChange} description={description} tasks={historyCount}/>
            <TaskBody tasks={tasks} taskDone={taskDone} taskRemove={taskRemove}/>
        </div>
    )
}
export default TaskContainer;