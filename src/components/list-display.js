import React from 'react';
import Helmet from 'react-helmet';
import { isEmpty } from 'lodash';

import ListItem from './list-item';
import ListFooter from './list-footer';

export default (props) => {
  if (isEmpty(props.currentList)) {
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
      <Helmet
        title={ `${props.currentList.name} / Lists` } />
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
              item => <ListItem
                        showPosition={ props.currentList.showPosition }
                        name={ item.name }
                        pos={ item.pos }
                        key={ item.id } />
            )
          }
        </ul>
      </div>
      <ListFooter {...props.currentList} />
    </div>
  );
};
