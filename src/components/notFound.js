import React from 'react';
import Helmet from 'react-helmet';

export default () => {
  return (
    <div>
      <Helmet
        title="404 Not Found" />
      <h3>Not Found</h3>
      <p>
        Sorry, but whatever you were looking for can not be found. Please use
        the menu above to see what's available.
      </p>
    </div>
  );
};

