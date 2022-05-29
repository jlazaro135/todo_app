import React, {useState} from 'react';
import TaskBody from './TaskBody';
import TaskHeader from './TaskHeader';

function TaskContainer({
    description, 
    setDescription, 
    tasks, 
    setTask, 
    historyCount, 
    setHistoryCount,
    history, 
    setHistory}){

    [description, setDescription] = useState("");
    [tasks, setTask] = useState([]);
    [historyCount, setHistoryCount] = useState(0);
    [history, setHistory] = useState([]);

    function handleChange(e){
        setDescription(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        setTask([...tasks, description]);
        setHistoryCount(historyCount + 1);   
        setDescription("");
    }

    console.log(tasks);

    function taskRemove(e){
        let taskItemRow = e.target.closest('.task-item');
        taskItemRow.remove();
        tasks.find((description) => description === 'a');
        console.log
        const newHistoryCount = historyCount - 1;
        setHistoryCount(newHistoryCount);
    }

    function taskDone(e){
        let taskItemRow = e.target.closest('.task-item');
        let taskItemDescription = taskItemRow.querySelector('.task-item__text')
        taskItemRow.style.backgroundColor = '#BFFFC6';
        taskItemDescription.style.color = '#02ac02';
    }



    return (
        <div className='taskContainer'>
            <TaskHeader onFormSubmit={handleSubmit} onDescriptionChange={handleChange} description={description} tasks={historyCount}/>
            <TaskBody tasks={tasks} taskDone={taskDone} taskRemove={taskRemove}/>
        </div>
    )
}
export default TaskContainer;