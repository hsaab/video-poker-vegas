import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App.js';
import Game from '../Containers/Game.js';
import { createMockStore } from 'redux-test-utils';

// ----            ---- \\
// ---- DUMMY DATA ---- \\
// ----            ---- \\

const state = { stage: 'draw' };
const store = createMockStore(state);

// ----            ---- \\
// ----   TESTS    ---- \\
// ----            ---- \\

describe('App.js tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App store={store}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders one Game component', () => {
    const wrapper = shallow(<App store={store}/>);
    expect(wrapper.contains(<Game/>)).toEqual(true);
  });
});
