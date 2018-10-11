import React from 'react';
import { shallow } from 'enzyme';
import Banner from '../Components/Banner.js';

describe('Banner.js tests', () => {
  let scores = [{ type: 'straight', hand: 'Straight 10 J Q K A', points: 500 }];
  it('displays winning message', () => {
    const wrapper = shallow(<Banner scores={scores}/>);
    const span = wrapper.find('span');
    expect(span.text()).toBe(`Congratulations you won ${scores[0].points} points with ${scores[0].hand}`);
  });

  it('displays try again next time message', () => {
    scores = [{ type: 'none', hand: 'None', points: 0 }];
    const wrapper = shallow(<Banner scores={scores}/>);
    const span = wrapper.find('span');
    expect(span.text()).toBe(`Sorry, try again next time!`);
  });
});
