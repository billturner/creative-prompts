import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import About from './components/about';
import App from './components/app';
import Contact from './components/contact';
import NotFound from './components/notFound';
import Randomizer from './containers/randomizer';

// Home - for IndexRoute?

const history = createHistory();

export default (
  <Router history={ history }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Randomizer } />
      <Route path="randomizer" component={ Randomizer } />
      <Route path="about" component={ About } />
      <Route path="contact" component={ Contact } />
      <Route path="*" component={ NotFound }/>
    </Route>
  </Router>
);
