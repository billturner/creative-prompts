import React from 'react';
import _ from 'lodash';

export default ({ credits, url }) => {
  if (_.isEmpty(credits)) { return <span></span>; }

  return (
    <div className="panel-footer">
      <strong>Credits:</strong>
      { ' ' }
      { credits }
      { ' ' }
      { url && '(' }
      { url &&
       <a href={ url }>more info & website</a>
      }
      { url && ')' }
    </div>
  );
};
