import React from 'react';
import { shallow } from 'enzyme';
import Result from '../Components/Result/Result.js';

const scores = [{ type: 'straight', hand: 'Straight 10 J Q K A', points: 500 }];
const chosen = [
  {card: '3H', held: true},
  {card: '5D', held: false},
  {card: '8C', held: false},
  {card: 'JS', held: false},
  {card: 'QD', held: true},
];
const stage = 'result';

describe('Result.js tests', () => {
  let props = {
    scores,
    chosen,
    stage,
    gameStage: jest.fn()
  }

  it('renders a banner element', () => {
    const wrapper = shallow(<Result {...props}/>);
    expect(wrapper.find('Banner')).toHaveLength(1);
  });

  it('renders five card components', () => {
    const wrapper = shallow(<Result {...props}/>);
    expect(wrapper.find('Card')).toHaveLength(5);
  });

  it('starts a new game on btn click', () => {
    const wrapper = shallow(<Result {...props}/>);
    wrapper.find('button').simulate('click');
    wrapper.update();
    expect(props.gameStage).toHaveBeenCalled();
  });
});
