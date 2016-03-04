import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import {
  chooseList,
  clearList
} from '../actions/lists';

import ListDisplay from '../components/list-display';

class Lists extends Component {
  buildOptions() {
    return this.props.lists.map(opt => {
      return (
        <option
          selected={
            _.isEmpty(this.props.currentList) ?
              false :
              this.props.currentList.id === opt.id
          }
          value={ opt.id }>{ opt.name }</option>
      );
    });
  }

  onSelect() {
    const chosenId = _.toInteger(this.refs.listChooser.value);
    if (chosenId === -1) {
      this.props.clearList();
    } else {
      this.props.chooseList(chosenId);
    }
  }

  render() {
    return (
      <div className="col-md-12">
        <h3>Lists</h3>
        <div className="form-group">
          <select
            onChange={ this.onSelect.bind(this) }
            name="listChooser"
            ref="listChooser"
            className="form-control">
            <option value="-1"></option>
            { this.buildOptions() }
          </select>
        </div>
        <div>
          <ListDisplay
            currentList={ this.props.currentList }
            currentListItems={ this.props.currentListItems } />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lists: state.lists.all,
    currentList: state.lists.current,
    currentListItems: state.lists.currentItems
  };
}
export default connect(mapStateToProps, { chooseList, clearList })(Lists);
