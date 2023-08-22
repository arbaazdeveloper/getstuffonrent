import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore, current } from '@reduxjs/toolkit';
import signupdata from './redux-feature/signupdata';
import isAuth from './redux-feature/isauth';
import  verificationCode  from './redux-feature/code';
import user from './redux-feature/user';
import currentItem  from './redux-feature/current';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=configureStore(
  {reducer:{
  signupdata:signupdata,
  verificationCode:verificationCode,
  isAuth:isAuth,
  user:user,
  currentItem:currentItem
  
}})
//https://getstuffonrentapi.onrender.com
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
   </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
