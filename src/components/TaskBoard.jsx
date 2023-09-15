import { PlusCircle, ClipboardText } from 'phosphor-react';

import styles from './TaskBoard.module.css';
import { Task } from './Task';
import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

export function TaskBoard() {
    const [tasks, setTasks] = useState([
        {
            id: uuidv4(),
            taskName: 'Lavar louça tarde',
            done: false,
        },
        {
            id: uuidv4(),
            taskName: 'Recolher roupas varal',
            done: false,
        },
        {
            id: uuidv4(),
            taskName: 'Guardar roupas na arara',
            done: false,
        },
        {
            id: uuidv4(),
            taskName: 'Lavar louça manhã',
            done: true,
        },
        {
            id: uuidv4(),
            taskName: 'Almoço',
            done: true,
        },
    ]);

    const [newTaskText, setNewTaskText] = useState('');

    const doneTaskCount = tasks.filter(task => {
        if(task.done){
            return true;
        }
        return false;
    }).length;

    function handleNewTaskChange() {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }

    function handleCreateNewTask() {
        event.preventDefault();

        const newTask = {
            id: uuidv4(),
            taskName: newTaskText,
            done: false
        };

        setTasks([...tasks, newTask]);
        setNewTaskText('');
    }

    function deleteTask(taskIdToDelete) {
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.id !== taskIdToDelete;
        })

        setTasks(tasksWithoutDeletedOne);
    }

    function doneTask(taskIdToDone) {
        const tasksWithTaskDone = tasks.map(task => {
            if(task.id === taskIdToDone && task.done === false) {
                task.done = true;
            } else if(task.id === taskIdToDone && task.done === true) {
                task.done = false;
            }
            return task;
        })

        setTasks(tasksWithTaskDone);
    }

    return (
        <div>
            <form onSubmit={handleCreateNewTask} className={styles.newTaskForm}>
                <textarea
                    name='task'
                    placeholder='Adicione uma nova tarefa'
                    value={newTaskText}
                    onChange={handleNewTaskChange}
                    required
                />

                <button type='submit'>
                    Criar
                    <PlusCircle size={16} />
                </button>
            </form>

            <div className={styles.taskBoard}>
                <header>
                    <div>
                        <span className={styles.criadas}>Tarefas criadas</span>
                        <span className={styles.counter}>{tasks.length}</span>
                    </div>
                    <div>
                        <span className={styles.concluidas}>Concluídas</span> 
                        <span className={styles.counter}>{doneTaskCount} de {tasks.length}</span>
                    </div>
                    
                </header>

                <div className={styles.tasksList}>
                    
                    {
                        tasks.length === 0 ?
                            <div className={styles.emptyTaskList}>
                                <ClipboardText weight='light' size={56} className={styles.clipBoard} />
                                <strong>Você ainda não tem tarefas cadastradas</strong>
                                <p>Crie tarefas e organize seus itens a fazer</p>
                            </div>
                        :
                            tasks.map(task => {
                                return (
                                    <Task  
                                        key={task.id}
                                        id={task.id}
                                        content={task.taskName}
                                        taskDone={task.done}
                                        onDeleteTask={deleteTask}
                                        onDoneTask={doneTask}
                                    />
                                )
                            })
                    }
                </div>
            </div>
        </div>
    )}