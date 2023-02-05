import React, {useState, useEffect} from 'react';

import styles from '../styles/App.module.css';
import Navbar from './Navbar';
import InputTask from './InputTask';
import TaskCard from './TaskCard';


function App() {
  /** Make posts state to hold all data which is fetch form api */
  const [todo, setTodo] = useState([]);
  /** Data loading message */
  const [load, setLoad] = useState(true);
  const [message, setMessage] = useState("Task Loading...");
 
  /** jsonplaceholder url */
  const url = "https://jsonplaceholder.typicode.com/todos";

  /** 
   * Fetch todo list from JSONPlaceholder api using get request
   */
  useEffect(() => {
    fetch(`${url}?_limit=20`)
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {
        setTodo(data);
        setLoad(false); 
      },800);
    })
    .catch(err => console.log(err));
  },[]);


  /** 
   * Function for add the task using post request 
   */
  function pressEnter(event, title){
    if(event.keyCode !== 13){
      return;
    }
    addTask(title);
    event.target.value = "";
  }

  async function addTask(title) {
    // if input is empty string or only space given.
    if(title.trim() === "" || title ==="") return;
  
    fetch(url, {
      method:'POST',
      body:JSON.stringify({
        userId:1,
        title:`${title}`,
        completed:false,
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
    console.log(task);
  }

  /**
   * Function for make the task completed
   */
  function completeTask(task) {
    console.log("clicked");
    if(task.completed === true){
      task["completed"] = false;
    }else{
      task["completed"] = true;
    }
    setTodo([...todo]);
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
      <Navbar className={styles.navbar}/>
      <div className={styles.task__container}>
        <InputTask addTask={addTask} pressEnter={pressEnter} />
        <div className={styles.task__list}>
          { load
            ? <div>{message}</div>
            : todo.map((task,index) => <TaskCard 
              task={task}
              key={`${task.title}${task.id}`} 
              updateTask={updateTask} 
              deleteTask={deleteTask} 
              completeTask={completeTask}
            />)
          }
        </div>

      </div>
    </div>
  );
}

export default App;
