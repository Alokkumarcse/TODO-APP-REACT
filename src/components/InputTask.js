import React,{useState} from 'react';

import styles from '../styles/InputTask.module.css';

const InputTask = ({addTask, pressEnter}) => {
  const [input, setInput] = useState("");
  const [value, setValue] = useState("");
  
  function handleInput(e){
    setInput(e.target.value);
  }

  return (
    <div className={styles.container}>
      <input 
        style={{padding:"5px 10px"}}
        type="text" 
        placeholder="What's need to be done?" 
        onChange={handleInput}
        onKeyDown={(e) => pressEnter(e,input)}
        onBlur={(e) => e.target.value = ""}
      />
      <button className={styles.btn} onClick={() => addTask(input)}>
        <i className="fa-solid fa-circle-plus"></i>
      </button>
    </div>
  )
}
export default InputTask
