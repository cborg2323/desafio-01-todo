import { Circle, CheckCircle, Trash } from 'phosphor-react';

import styles from './Task.module.css';

export function Task( { taskDone = false, content, onDeleteTask, id } ) {
    
    function handleDeleteTask() {
        onDeleteTask(id);
    }

    return (
        <div className={styles.todoTaskBody}>
            <div className={styles.buttonSpanTask}>
                <button className={taskDone ? styles.iconDoneTask : styles.checkTask}>
                    { taskDone ? <CheckCircle weight='fill' size={17.45} /> : <Circle size={17.45} /> }
                </button>

                <span className={taskDone ? styles.textTaskDone : styles.textTaskTodo}>{content}</span>
            </div>
            

            <button onClick={handleDeleteTask} className={styles.trashTask}>
                <Trash size={14} />
            </button>
        </div>
    )
}