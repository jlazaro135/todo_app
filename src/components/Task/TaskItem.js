import React from 'react';

function TaskItem({description, onClickRemove, onClickDone}){
    return(
        <div className='task-item'>
            <p className='task-item__text'>
                {description}
            </p>
            <div className='task-item__buttons'>
                <button role="button" className="material-symbols-outlined done" onClick={onClickDone}>done</button>
                <button role="button" className="material-symbols-outlined delete" onClick={onClickRemove}>delete_forever</button>
            </div>
        </div>
    );
}

export default TaskItem;