import React from 'react';

export default ({ showPosition, pos, name }) => {
  return (
    <li className="list-group-item">
      { showPosition && `${pos}. ` }
      { name }
    </li>
  );
};
