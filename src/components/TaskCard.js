import React from 'react';

import styles from '../styles/TaskCard.module.css';

const Task = ({task, updateTask, deleteTask, completeTask, setValue}) => {
  const {title, completed} = task;
  return (
    <div className={styles.container}>
      <div className={styles.task__card}>
        {
          completed
          ? <div className={styles.text}>
              <i className={`fa-regular fa-circle-check ${styles.checkbox}`} onClick={() => completeTask(task)}> </i>
              <span style={{textDecoration:"line-through"}}>{title}</span> 
            </div>
          : <div className={styles.text}>
              <i className={`fa-regular fa-circle ${styles.non__checkbox}`} onClick={() => completeTask(task)}> </i>
              <span >{title}</span>
            </div>
        }
      </div>
      <div className={styles.btn}>
        <i className={`fa-solid fa-pen-to-square ${styles.edit__btn}`} onClick={() => {setValue(task.title); updateTask(task); }}> </i>
        <i className={`fa-solid fa-trash ${styles.delete__btn}`} onClick={() => deleteTask(task)}> </i>
      </div>
    </div>
  )
}

export default Task;