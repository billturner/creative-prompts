import React from 'react';

import Header from './header';

export default (props) => {
  return (
    <div>
      <Header { ...props.history } />
      { props.children }
    </div>
  );
};
