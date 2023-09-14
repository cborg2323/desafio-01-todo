import { PlusCircle } from 'phosphor-react';

import styles from './TaskBoard.module.css';
import { Task } from './Task';

export function TaskBoard() {
    return (
        <div>
            <form className={styles.newTaskForm}>
                <textarea
                    placeholder='Adicione uma nova tarefa'
                ></textarea>

                <button>
                    Criar
                    <PlusCircle size={16} />
                </button>
            </form>

            <div className={styles.taskBoard}>
                <header>
                    <div>
                        <span className={styles.criadas}>Tarefas criadas</span>
                        <span className={styles.counter}>5</span>
                    </div>
                    <div>
                        <span className={styles.concluidas}>Concluídas</span> 
                        <span className={styles.counter}>2 de 5</span>
                    </div>
                    
                </header>

                <div className={styles.tasksList}>
                    <Task />
                    <Task />
                    <Task />
                    <Task taskDone={true} />
                    <Task taskDone={true} />
                </div>
            </div>
        </div>
    )}