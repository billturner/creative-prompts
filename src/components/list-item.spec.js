import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import ListItem from './list-item';

const props = { name: 'Draw a person' },
      rendered = shallow(<ListItem {...props} />);

describe('Components: ListItem', () => {
  it('renders a list item', () => {
    expect(rendered.type()).toEqual('li');
    expect(rendered.prop('className')).toInclude('list-group-item');
  });

  it('renders the item\'s name', () => {
    expect(rendered.children().at(0).text()).toInclude('Draw a person');
  });
});
