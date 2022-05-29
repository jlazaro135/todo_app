import React from 'react';
import TaskItem from './TaskItem';



function TaskBody({tasks, taskDone, taskRemove}){
    return(
        <main>
            {tasks.map((task, index) => (
              <TaskItem
                description={task}
                key={task[index]}
                onClickDone={taskDone}
                onClickRemove={taskRemove}
              />
            ))}
            {tasks.length === 0 && (
              <p className="empty-item">Hurra! 🎉🎉</p>
            )}
        </main>
    );
}

export default TaskBody;