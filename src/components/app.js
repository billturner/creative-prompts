import React from 'react';
import Helmet from 'react-helmet';

import Header from './header';

export default (props) => {
  return (
    <div>
      <Helmet
        title="Home"
        titleTemplate="%s / Creative Sketching Prompts" />
      <Header { ...props.history } />
      { props.children }
    </div>
  );
};
