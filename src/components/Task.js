import React from 'react';

const Task = ({task, updateTask, deleteTask}) => {
  const {title} = task;
  return (
    <div style={{display:"flex", border:"2px solid gray", justifyContent:"space-between", padding:"5px"}}>
      <div style={{fontSize:"13px"}}>
        <i className="fa-regular fa-circle"></i>
        <i className="fa-regular fa-circle-check"></i>
        {title}
      </div>
      <div>
        <i className="fa-solid fa-pen" onClick={() => updateTask(task)}></i>
        <i className="fa-solid fa-trash" onClick={() => deleteTask(task)}></i>
      </div>
    </div>
  )
}

export default Task;