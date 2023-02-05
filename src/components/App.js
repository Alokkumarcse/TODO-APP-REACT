import React, {useState, useEffect} from 'react';

import styles from '../styles/App.module.css';
import Navbar from './Navbar';
import InputTask from './InputTask';
import Task from './Task';


function App() {
  /** Make posts state to hold all data which is fetch form api */
  const [todo, setTodo] = useState([]);
  /** Data loading message */
  const [load, setLoad] = useState(true);
  const [message, setMessage] = useState("Loading...");
 
  /** jsonplaceholder url */
  const url = "https://jsonplaceholder.typicode.com/todos";

  /** 
   * Fetch todo list from JSONPlaceholder api using get request
   */
  useEffect(() => {
    fetch(`${url}?_limit=5`)
    .then((response) => response.json())
    .then((data) => {
      setTodo(data);
      setLoad(false); 
    })
    .catch(err => console.log(err));
  },[]);


  /** 
   * Function for add the task using post request 
   */
  async function addTask(title) {
    // if input is empty string or only space given.
    if(title.trim() === "" || title ==="") return;
  
    fetch(url, {
      method:'POST',
      body:JSON.stringify({
        userId:1,
        title:`${title}`,
      }),
      headers:{
        'Content-type':'application/json; charset=UTF-8',
      }
    })
    .then((response) => response.json())
    .then(data => {
      data['id'] = `${title}`;
      data[`completed`] = false; 
      setTodo([data, ...todo]);
    })
    .catch(err => console.log(err));
  }

  /**
   * Function for Update the task
   */
  function updateTask(task){
    task = todo.filter((item) => item.title === task.title);
    console.log(task);
  }

  /**
   * Function for make the task completed
   */
  function completeTask(task) {
    
  }

  /**
   * Function for Delete the task
   */
  function deleteTask(task){
    fetch(`${url}/1`, {
      method:'DELETE',
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      console.log("deleted task ", task.title);
      data = todo.filter((item) => task.title !== item.title);
      setTodo([...data]);

      if(data.length === 0){
        setMessage("Yeh, No more todo :))");
      }
    })
    .catch(err => console.log(err));
  }

  /** console the updated todo list */
  console.log(todo);

  /** UI code - jsx */
  return (
    <div className={styles.app}>
      <Navbar />
      <InputTask addTask={addTask} />
      <div className={styles.task__list}>
        { 
          load
          ? <div>{message}</div>
          : todo.map((task,index) => <Task 
            task={task}
            key={`${task.title}${task.id}`} 
            updateTask={updateTask} 
            deleteTask={deleteTask} 
            completeTask={completeTask}
          />)
        }
      </div>
    </div>
  );
}

export default App;
