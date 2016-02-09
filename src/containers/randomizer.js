import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { generateNewPrompt } from '../actions/general';

export class Randomizer extends Component {
  currentPrompt() {
    const newSubject = this.props.currentSubject,
          newTechnique = this.props.currentTechnique;

    return (
      <div>
        <div>
          <h5>Subject:</h5>
          { _.isEmpty(newSubject) ? '-' : newSubject.name }
        </div>
        <div>
          <h5>Technique:</h5>
          { _.isEmpty(newTechnique) ? '-' : newTechnique.name }
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
    currentSubject: state.subjects.current,
    currentTechnique: state.techniques.current
  };
}

export default connect(mapStateToProps, { generateNewPrompt })(Randomizer);
