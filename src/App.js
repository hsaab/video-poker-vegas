import React from 'react';
import { Provider } from "react-redux";
import Game from './Containers/Game.js';
import './Styles/App.scss';

const App = ({ store }) => (
    <Provider store={store}>
      <Game/>
    </Provider>
);

export default App;
