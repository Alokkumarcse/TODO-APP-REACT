import React,{useState} from 'react';

import styles from '../styles/InputTask.module.css';

import TaskCard from './TaskCard';

const InputTask = ({addTask, pressEnter,updateTask, deleteTask, completeTask, todo, load, message}) => {
  const [value, setValue] = useState("");
  
  function handleInput(e){
    setValue(e.target.value);
  }

  function handleEnter(e){
    if(e.keyCode === 13){
      setValue("");
    }
  }

  return (
    <div className={styles.container} >
      {/* Input box to take user input */}
      <div className={styles.input__container}>
        <input 
          style={{padding:"5px 10px", fontSize:"1rem"}}
          type="text" 
          placeholder="What's need to be done?" 
          value={value}
          onChange={handleInput}
          onKeyDown={(e) => { pressEnter(e,value); handleEnter(e)}}
          onBlur={(e) => e.target.value = ""}
        />
        <button className={styles.btn} onClick={() => {addTask(value); setValue("")}}>
          <i className="fa-solid fa-circle-plus"></i>
        </button>
      </div>
      {/* task card rendered here */}
      <div className={styles.task__list}>
        { load
          ? <div>{message}</div>
          : todo.map((task,index) => <TaskCard 
            task={task}
            key={`${task.title}${task.id}`} 
            setValue={setValue}
            updateTask={updateTask} 
            deleteTask={deleteTask} 
            completeTask={completeTask}
          />)
        }
        <div className={styles.end}>
          <span>🔴🟠🟢</span>
        </div>
      </div>
    </div>
   
  )
}
export default InputTask
