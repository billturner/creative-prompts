import React from 'react';
import _ from 'lodash';

import ListItem from './list-item';

export default (props) => {
  if (_.isEmpty(props.currentList)) {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          Choose a list from the drop-down menu above to view its challenges.
        </div>
      </div>
    );
  }

  function buildFooter() {
    if (_.isEmpty(props.currentList.credits)) { return ''; }

    return (
      <div className="panel-footer">
        <strong>Credits:</strong>
        { ' ' }
        { props.currentList.credits }
        { ' ' }
        (<a href={ props.currentList.url }>link</a>)
      </div>
    );
  }

  function buildItems(items) {
    return props.currentListItems.map(item => {
      return <ListItem name={ item.name } key={ item.id } />;
    });
  }

  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <div className="panel-title">
          { props.currentList.name }
        </div>
      </div>
      <div className="panel-body">
        <p>
          { props.currentList.description }
        </p>
        <ul className="list-group">
          { buildItems(props.currentListItems) }
        </ul>
      </div>
      { buildFooter(props.currentList) }
    </div>
  );
};
