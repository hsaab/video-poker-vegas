import React, { PropTypes} from 'react';
import { mount, shallow } from 'enzyme';
import Game from '../Containers/Game.js';
import Layout from '../Components/Layout.js';
import actions from '../Redux/Actions/index.js';
import { createMockStore } from 'redux-test-utils';

// ----            ---- \\
// ---- DUMMY DATA ---- \\
// ----            ---- \\

const state = { stage: 'draw' };
const store = createMockStore(state);
const options = {
  context: { store }
};

// ----            ---- \\
// ----   TESTS    ---- \\
// ----            ---- \\

describe('Game.js tests', () => {
  it('calls componentDidMount', () => {
    const spy = jest.spyOn(Game.prototype, 'componentDidMount');
    const wrapper = shallow(<Game/>, options);
    expect(Game.prototype.componentDidMount).toHaveBeenCalledTimes(1);
  });

  it('passes Draw component to Layout', () => {
    const wrapper = mount(<Game/>, options);
    expect(wrapper.find('Draw')).toHaveLength(1);
  });
});
