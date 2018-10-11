import React from 'react';
import { shallow } from 'enzyme';
import Banner from '../Components/Banner.js';

// ----            ---- \\
// ---- DUMMY DATA ---- \\
// ----            ---- \\

const straightScore = [{ type: 'straight', hand: 'Straight 10 J Q K A', points: 500 }];
const noneScore = [{ type: 'none', hand: 'None', points: 0 }];

// ----            ---- \\
// ----   TESTS    ---- \\
// ----            ---- \\

describe('Banner.js tests', () => {
  it('displays winning message', () => {
    const wrapper = shallow(<Banner scores={straightScore}/>);
    const span = wrapper.find('span');
    expect(span.text()).toBe(`Congratulations you won ${scores[0].points} points with ${scores[0].hand}`);
  });

  it('displays try again next time message', () => {
    const wrapper = shallow(<Banner scores={noneScore}/>);
    const span = wrapper.find('span');
    expect(span.text()).toBe(`Sorry, try again next time!`);
  });
});
