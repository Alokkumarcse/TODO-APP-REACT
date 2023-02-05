import React,{useState} from 'react';

const InputTask = ({addTask}) => {
  const [input, setInput] = useState("");
  
  function handleInput(e){
    setInput(e.target.value);
  }

  return (
    <div style={{border:"1px solid lightgrey", padding:"10px", display:"flex", justifyContent:"center", alignContent:"center", gap:"5px"}}>
      <input 
        type="text" 
        placeholder="What's need to be done?" 
        style={{padding:"5px 10px", textAlign:"center" }}
        onChange={handleInput}
        onBlur={(e) => e.target.value=""}
      />
      <button onClick={() => addTask(input)} style={{padding:"2px 10px", textAlign:"center" }}>
        <i className="fa-solid fa-circle-plus"></i>
      </button>
    </div>
  )
}
export default InputTask
