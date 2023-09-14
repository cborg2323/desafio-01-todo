import { Circle, CheckCircle, Trash } from 'phosphor-react';

import styles from './Task.module.css';

export function Task( { taskDone = false } ) {
    return (
        <div className={styles.todoTaskBody}>
            <button className={taskDone ? styles.iconDoneTask : styles.checkTask}>
                { taskDone ? <CheckCircle weight='fill' size={17.45} /> : <Circle size={17.45} /> }
            </button>

            <span className={taskDone ? styles.textTaskDone : styles.textTaskTodo}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>

            <button className={styles.trashTask}>
                <Trash size={14} />
            </button>
        </div>
    )
}