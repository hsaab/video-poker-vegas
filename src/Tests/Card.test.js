import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Components/Card.js';

describe('Card.js tests', () => {
  let each = { card: 'AS', held: true };
  it('renders one div element', () => {
    const wrapper = shallow(<Card stage='switch' each={each}/>);
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('renders one img element', () => {
    const wrapper = shallow(<Card stage='switch' each={each}/>);
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('if not held renders Discard element', () => {
    each.held = false;
    const wrapper = shallow(<Card stage='switch' each={each}/>);
    expect(wrapper.find('span')).toHaveLength(1);
  });

  it('calls toggle on img click', () => {
    const toggle = jest.fn();
    const wrapper = shallow(<Card stage='switch' each={each} toggle={toggle}/>);
    wrapper.find('img').simulate('click');
    expect(toggle.mock.calls.length).toEqual(1);
  });

  it('does not call toggle on img click', () => {
    const toggle = jest.fn();
    const wrapper = shallow(<Card stage='result' each={each} toggle={toggle}/>);
    wrapper.find('img').simulate('click');
    expect(toggle.mock.calls.length).toEqual(0);
  });
});
