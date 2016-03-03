import React from 'react';
import _ from 'lodash';

import ListItem from './list-item';

export default (props) => {
  if (_.isEmpty(props.currentList)) {
    return (
      <div className="panel-body">
        No list chosen.
      </div>
    );
  }

  function buildItems() {
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
        <ul className="list-group">
          { buildItems() }
        </ul>
      </div>
    </div>
  );
};
