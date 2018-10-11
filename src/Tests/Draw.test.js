import React from 'react';
import { shallow } from 'enzyme';
import Draw from '../Components/Draw/Draw.js';
import * as API from '../API/cardActions.js';
import * as actions from '../Redux/actions/index.js';

describe('Draw.js tests', () => {
  let props = {
    createShuffledDeck: API.createShuffledDeck,
    dealFiveCards: API.dealFiveCards,
    replaceCards: actions.replaceCards,
    gameStage: actions.gameStage
  };

  it('deals cards on btn click', () => {
    const dealCards = jest.spyOn(Draw.prototype, 'dealCards');
    const wrapper = shallow(<Draw {...props}/>);
    wrapper.find('button').simulate('click');
    wrapper.update();
    expect(dealCards).toHaveBeenCalled();
  });
});
