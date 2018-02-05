import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyList />, document.getElementById('root'));
registerServiceWorker();
