import React from 'react';

export default (item) => {
  return (
    <h4>
      { item.hasOwnProperty('name') ? item.name : '-' }
    </h4>
  );
};

