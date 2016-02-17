import React, { Component } from 'react';
import { connect } from 'react-redux';

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

  render() {
    return (
      <div>
        <h3>Lists</h3>
        <select name="bob" ref="listChooser" className="col-xs-8 form-control">
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
