import React from 'react';
import TaskItem from './TaskItem';


function TaskBody({tasks, taskDone, taskRemove}){
    return(
        <main>
            {tasks.map((task, index) => (
              <TaskItem
                description={task.task}
                key={task.id}
                onClickDone={() => taskDone(index)}
                onClickRemove={() => taskRemove(index)}
                success= {task.completed ? '-success' : ''}
              />
            ))}
            {tasks.length === 0 && (
              <p className="empty-item">Hurra! 🎉🎉</p>
            )}
        </main>
    );
}

export default TaskBody;