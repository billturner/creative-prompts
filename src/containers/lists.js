import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { isEmpty, toInteger } from 'lodash';

import {
  chooseList,
  clearList
} from '../actions/lists';

import ListDisplay from '../components/list-display';

class Lists extends Component {
  constructor(props) {
    super(props);
    if (isEmpty(this.props.currentList) && this.props.params.id) {
      this.props.chooseList(toInteger(this.props.params.id));
    }
  }

  buildOptions() {
    return this.props.lists.map(opt => {
      return (
        <option
          selected={
            isEmpty(this.props.currentList) ?
              false :
              this.props.currentList.id === opt.id
          }
          value={ opt.id }>{ opt.name }</option>
      );
    });
  }

  onSelect() {
    const chosenId = toInteger(this.refs.listChooser.value);
    if (chosenId === -1) {
      this.props.clearList();
      this.props.history.push(`/lists`);
    } else {
      this.props.chooseList(chosenId);
      this.props.history.push(`/lists/${chosenId}`);
    }
  }

  render() {
    return (
      <div className="col-md-12">
        <Helmet
          title="Lists" />
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
