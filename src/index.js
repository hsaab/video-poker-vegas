import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/store.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App store={store}/>,
  document.getElementById('root'));
