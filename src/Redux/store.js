import { createStore } from 'redux';
import reducer from './Reducer/index.js';

const store = createStore(reducer);

export default store;
