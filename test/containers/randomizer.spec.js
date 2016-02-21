import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import {
  createRenderer
} from 'react-addons-test-utils';

import { Randomizer } from '../../src/containers/randomizer';

function setup() {
  let output;
  const props = {
          randomizer: {
            currentSubject: { name: 'Test' },
            currentTechnique: { name: 'Cool' }
          },
          generateNewPrompt: sinon.spy()
        },
        renderer = createRenderer();

  renderer.render(
    <Randomizer {...props} />
  );

  output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
    renderer: renderer
  };
}

describe('Containers: randomizer', () => {
  describe('rendering', () => {
    it('renders div with children', () => {
      const { output } = setup();

      expect(output.type).to.equal('div');
      expect(output.props.children.length).to.equal(2);
    });
  });
});
