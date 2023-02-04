import React, {useState, useEffect} from 'react';

/** Files and component imported */
import styles from '../styles/App.module.css';
import Navbar from './Navbar';
import Task from './Task';
import InputTask from './InputTask';

function App() {
  /** Make posts state to hold all data which is fetch form api */
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  /** make state to store user input */
  const [input, setInput] = useState("");

  /** jsonplaceholder url */
  const api = "https://jsonplaceholder.typicode.com/posts";

  /** Fetch posts from JSONPlaceholder api using get request */
  useEffect(() => {
   fetch(`${api}?_limit=5`)
   .then((response) => response.json())
   .then((data) => {setPosts(data); console.log(data);})
   .catch((error) => setError(error))
  },[api]);

 
  /** method for handling the user input */
  function storeInput(e){
    setInput(e.target.value);
    console.log(e.target.value);
  }

  /** method for add the task using post request */
  async function postData() {
    console.log("data posted");
    // fetch(api, {
    //   method:'POST',
    //   body:JSON.stringify({
    //     title:`new todo`,
    //     body:'bar',
    //     userId:25,
    //   }),
    //   headers:{
    //     'Content-type':'application/json; charset=UTF-8',
    //   }
    // })
    // .then((response) => response.json())
    // .then(data => console.log(data))
    // .catch(err => console.log(err));

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    console.log(data);
   
  }



  /** UI code - jsx */
  return (
    <div className={styles.app}>
      <Navbar />
      <InputTask storeInput={storeInput} postData={postData} />
      <div className={styles.task__list}>
        { error && <div>Error</div>}
        { !posts
          ? <div>Loading...</div>
          : posts.map((item) => <Task post={item} key={`post${item.id}`} />)
        }
      </div>
    </div>
  );
}

export default App;
