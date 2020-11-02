import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ContextDemo from './contextlearn/ContextDemo'
import './index.css'
import AppState from './AppState';
import LeftCel from './LeftCel';
import ChildPop from './Popup/ChildPop'
import InputContent from './InputContent';
// import StoreDemo from './store/StoreDemo'

// import UseStateFn from './hook/useStateFn';
// import PuseRef from './hook/PuseRef';
// import PuseEffect from './hook/PuseEffect';
ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppState />
    <LeftCel />
    <ChildPop />
    <InputContent />
    <ContextDemo />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
