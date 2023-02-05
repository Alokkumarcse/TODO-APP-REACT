//crate action type
export const ADD_TASK = "ADD_TASK",
  DELETE_TASK = "DELETE_TASK",
  MODIFY_TASK = "MODIFY_TASK";

/**
 * Action creators
 */
export function addAction(task){
  return(
    {
      type:ADD_TASK,
      task,
    }
  )
}

export function modifyAction(task){
  return(
    {
      type:MODIFY_TASK,
      task,
    }
  )
}

export function deleteAction(task){
  return({
    type:DELETE_TASK,
    task,
  })
}

export function fetchDataAction(){
  const url= 'https://jsonplaceholder.typicode.com/todos?_limit=5';
  return function(dispatch){
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(addAction(data)))
    .catch(err => console.log(err));
  }
}