import React from 'react';
import { isEmpty } from 'lodash';

export default ({ credits, url }) => {
  if (isEmpty(credits)) { return <span></span>; }

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
