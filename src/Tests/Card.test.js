import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Components/Card.js';

// ----            ---- \\
// ---- DUMMY DATA ---- \\
// ----            ---- \\

const cardHeld = {
  card: 'AS',
  held: true
};
const cardNotHeld = {
  card: 'AS',
  held: false
};

// ----            ---- \\
// ----   TESTS    ---- \\
// ----            ---- \\

describe('Card.js tests', () => {
  it('renders one div element', () => {
    const wrapper = shallow(<Card stage='switch' each={cardHeld}/>);
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('renders one card img element', () => {
    const wrapper = shallow(<Card stage='switch' each={cardHeld}/>);
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('if card not held renders discard text', () => {
    const wrapper = shallow(<Card stage='switch' each={cardNotHeld}/>);
    expect(wrapper.find('span')).toHaveLength(1);
  });

  it('if switch stage calls toggle on card img click', () => {
    const toggle = jest.fn();
    const wrapper = shallow(<Card stage='switch' each={cardHeld} toggle={toggle}/>);
    wrapper.find('img').simulate('click');
    expect(toggle.mock.calls.length).toEqual(1);
  });

  it('if result stage does not call toggle on card img click', () => {
    const toggle = jest.fn();
    const wrapper = shallow(<Card stage='result' each={cardHeld} toggle={toggle}/>);
    wrapper.find('img').simulate('click');
    expect(toggle.mock.calls.length).toEqual(0);
  });
});
