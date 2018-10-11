import React from 'react';
import { shallow } from 'enzyme';
import Switch from '../Components/Switch/Switch.js';
import * as API from '../API/cardActions.js';
import * as actions from '../Redux/actions/index.js';

// ----            ---- \\
// ---- DUMMY DATA ---- \\
// ----            ---- \\

const props = {
  deck: API.createShuffledDeck(),
  calculateResult: API.calculateResult,
  addScore: actions.addScore,
  replaceCards: actions.replaceCards,
  gameStage: actions.gameStage,
  toggleCard: actions.toggleCard,
  stage: 'switch',
  chosen: [
    {card: '3H', held: true},
    {card: '5D', held: false},
    {card: '8C', held: false},
    {card: 'JS', held: false},
    {card: 'QD', held: true},
  ]
};

// ----            ---- \\
// ----   TESTS    ---- \\
// ----            ---- \\

describe('Switch.js tests', () => {
  it('get result on btn click', () => {
    const getResult = jest.spyOn(Switch.prototype, 'getResult');
    const wrapper = shallow(<Switch {...props}/>);
    wrapper.find('button').simulate('click');
    wrapper.update();
    expect(getResult).toHaveBeenCalled();
  });
});
