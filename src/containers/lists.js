import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { chooseList } from '../actions/lists';

class Lists extends Component {
  buildOptions() {
    return this.props.lists.map(opt => {
      return (
        <option
          value={ opt.id }>{ opt.name }</option>
      );
    });
  }

  chooseList() {
    const chosenId = _.toInteger(this.refs.listChooser.value);
    if (chosenId === -1) { return; }
    console.log(`I chose list number ${chosenId}`);
  }

  render() {
    return (
      <div>
        <h3>Lists</h3>
        <select
          onChange={ this.chooseList.bind(this) }
          name="listChooser"
          ref="listChooser"
          className="col-xs-8 form-control">
          <option value="-1"></option>
          { this.buildOptions() }
        </select>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lists: state.lists.all,
    currentList: state.lists.current
  };
}
export default connect(mapStateToProps, { chooseList })(Lists);
