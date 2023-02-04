import React from 'react';

function InputTask({storeInput, postData}) {
  
  return (
    <div style={{border:"1px solid lightgrey", padding:"10px", display:"flex", justifyContent:"center", alignContent:"center", gap:"5px"}}>
      <form>
        <input 
          type="text" 
          placeholder="What's need to be done?" 
          style={{padding:"5px 10px", textAlign:"center" }}
          onChange={(e) => storeInput(e)}
        />
        <button onClick={postData} style={{padding:"2px 10px", textAlign:"center" }}>
          <i class="fa-solid fa-circle-plus"></i>
        </button>
      </form>
     
    </div>
  )
}

export default InputTask
