import React, { Component } from 'react';
import { connect } from 'react-redux';

import { generateNewPrompt } from '../actions/general';

class Prompt extends Component {
  currentPrompt() {
    const newSubject = this.props.currentSubject;
    const newTechnique = this.props.currentTechnique;

    if (!newSubject && !newTechnique) {
      return <div>Click button below</div>;
    }

    return (
      <div>
        <div>
          <strong>Subject:</strong>
          { newSubject.name }
        </div>
        <div>
          <strong>Technique:</strong>
          { newTechnique.name }
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.currentPrompt() }
        <button
          onClick={ this.props.generateNewPrompt.bind(this) }
          className="btn btn-primary">
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

export default connect(mapStateToProps, { generateNewPrompt })(Prompt);
