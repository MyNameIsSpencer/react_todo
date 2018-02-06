import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList.js';
import registerServiceWorker from './registerServiceWorker';

var toDos

var toDos = [
    "Buy Ice Cream",
    "Don't Eat Ice Cream",
    "Exercise",
    "Smash Hard Drive",
    "Buy New Computer"
  ]

ReactDOM.render(
  <MyList theList={toDos}/>,
  document.getElementById('root'));
registerServiceWorker();
