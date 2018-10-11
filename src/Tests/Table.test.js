import React from 'react';
import { shallow } from 'enzyme';
import Table from '../Components/Table.js';

describe('Table.js tests', () => {
  let scores = [{ type: 'straight', hand: 'Straight 10 J Q K A', points: 500 }];
  it('renders table with score data', () => {
    const wrapper = shallow(<Table scores={scores}/>);
    expect(wrapper.find('ReactTable')).toHaveLength(1);
  });
});
