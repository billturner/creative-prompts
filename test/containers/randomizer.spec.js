import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import {
  createRenderer,
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';

import { Randomizer } from '../../src/containers/randomizer';

function setup() {
  const props = {
    subjects: {
      current: {
        name: 'Test subject'
      }
    },
    techniques: {
      current: {
        name: 'Test technique'
      }
    },
    generateNewPrompt: sinon.spy()
  };

  const renderer = createRenderer();

  renderer.render(
    <Randomizer {...props} />
  );

  let output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('Containers: randomizer', () => {
  describe('rendering', () => {
    it('renders', () => {
      const { output } = setup();
      // console.log('out', output);
    });
  });
});
