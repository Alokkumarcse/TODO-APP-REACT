import React from 'react';
import ReactDOM from 'react-dom/client';

// import { applyMiddleware, createStore } from "redux";
// import thunk from 'redux';
// import taskReducer from './reducers';

import './styles/index.css';
import App from './components/App';

// // create loggerMiddleware function currying way
// function loggerMiddleware({dispatch, getState}){
//   return function(next){
//     return function(action){
//       console.log("Action : ", action.type);
//       next(action);
//     }
//   }
// }

// // create middleware  using arrow function
// const readerMiddleware = ({dispatch, getState}) => (next) => (action) => {
//   if(typeof action !== 'function'){
//     console.log("Action dispatch : ", action.type);
//   }
//   next(action);
// } 

// // store created along with middleware
// const store = createStore(taskReducer, applyMiddleware(loggerMiddleware, readerMiddleware, thunk))
// console.log(store);
// console.log(store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);