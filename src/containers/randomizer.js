import React, { Component } from 'react';
import { connect } from 'react-redux';

import { generateNewPrompt } from '../actions/randomizer';
import RandomizerItem from '../components/randomizer-item';

export class Randomizer extends Component {
  currentPrompt() {
    return (
      <div>
        <div>
          <h5>Subject:</h5>
          <RandomizerItem {...this.props.currentSubject} />
        </div>
        <div>
          <h5>Technique:</h5>
          <RandomizerItem {...this.props.currentTechnique} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="prompt-display">
        { this.currentPrompt() }
        <button
          onClick={ this.props.generateNewPrompt.bind(this) }
          className="btn btn-primary btn-regenerate">
          Generate Prompt
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentSubject: state.randomizer.currentSubject,
    currentTechnique: state.randomizer.currentTechnique
  };
}

export default connect(mapStateToProps, { generateNewPrompt })(Randomizer);
