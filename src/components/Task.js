import React from 'react';

function Task({post}) {
  const {title, id} = post;
  return (
    <div style={{display:"flex", border:"2px solid gray", justifyContent:"space-between", padding:"5px"}}>
      <div style={{fontSize:"13px"}}><i class="fa-regular fa-circle"></i> {title}</div>
      <div>
        <i className="fa-solid fa-pen"></i>
        <i className="fa-solid fa-trash"></i>
      </div>
    </div>
  )
}

export default Task;
