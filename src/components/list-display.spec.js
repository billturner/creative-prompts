import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import ListDisplay from './list-display';

describe('Components: ListDisplay', () => {
  describe('blank without props', () => {
    const props = {};

    it('shows message when no list is chosen', () => {
      const rendered = shallow(<ListDisplay {...props} />);

      expect(rendered.text()).toInclude('Choose a list');
    });

    it('does not render a header', () => {
      const rendered = shallow(<ListDisplay {...props} />);

      expect(rendered.find('.panel-heading').length).toEqual(0);
    });
  });

  describe('details and list items with props', () => {
    const props = {
      currentList: {
        name: 'My List',
        description: 'A long list of items'
      },
      currentListItems: []
    };

    it('renders header with title of list', () => {
      const rendered = shallow(<ListDisplay {...props} />);

      expect(rendered.find('.panel-heading').length).toEqual(1);
      expect(rendered.find('.panel-heading').text()).toInclude('My List');
    });
  });
});
