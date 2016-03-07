import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import { Randomizer } from './randomizer';

const props = {
  randomizer: {
    currentSubject: { name: 'Test' },
    currentTechnique: { name: 'Cool' }
  },
  generateNewPrompt: expect.createSpy()
};

describe('Containers: Randomizer', () => {
  describe('rendering', () => {
    it('renders div with children', () => {
      const rendered = shallow(<Randomizer { ...props } />);

      expect(rendered.type()).toEqual('div');
      expect(rendered.node.props.children.length).toEqual(2);
    });
  });

  // it('renders the current subject and technique', () => {
  //   const { output } = setup();

  //   expect(output).toIncludeJSX('Test');
  //   expect(output).toIncludeJSX('Cool');
  // });
});
