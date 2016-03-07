import React from 'react';
import _ from 'lodash';

import ListItem from './list-item';
import ListFooter from './list-footer';

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
          {
            props.currentListItems.map(
              item => <ListItem name={ item.name } key={ item.id } />
            )
          }
        </ul>
      </div>
      <ListFooter {...props.currentList} />
    </div>
  );
};
