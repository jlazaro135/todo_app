import React from 'react';

function TaskItem({description, onClickRemove, onClickDone, success}){
    return(
        <div className={'task-item task-item'+success}>
            <p className='task-item__text'>
                {description}
            </p>
            <div className='task-item__buttons'>
                <button className="material-symbols-outlined done" onClick={onClickDone}>done</button>
                <button className="material-symbols-outlined delete" onClick={onClickRemove}>delete_forever</button>
            </div>
        </div>
    );
}

export default TaskItem;