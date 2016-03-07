import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import RandomizerItem from './randomizer-item';

describe('Components: RandomizerItem', () => {
  it('creates an h4 tag', () => {
    const props = {},
          rendered = shallow(<RandomizerItem {...props} />);
    expect(rendered.type()).toEqual('h4');
  });

  it('shows a dash with no current item', () => {
    const props = {},
          rendered = shallow(<RandomizerItem {...props} />);
    expect(rendered.text()).toInclude('-');
  });

  it('displays the item\'s name when provided', () => {
    const props = { name: 'car' },
          rendered = shallow(<RandomizerItem {...props} />);
    expect(rendered.text()).toInclude('car');
  });
});
