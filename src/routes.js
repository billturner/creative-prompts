import React from 'react';
import { Route, IndexRoute } from 'react-router';

import About from './components/about';
import App from './components/app';
import Contact from './components/contact';
import Lists from './containers/lists';
import NotFound from './components/notFound';
import Randomizer from './containers/randomizer';

// Home - for IndexRoute?

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ Randomizer } />
    <Route path="randomizer" component={ Randomizer } />
    <Route path="lists" component={ Lists } />
    <Route path="lists/:id" component={ Lists } />
    <Route path="about" component={ About } />
    <Route path="contact" component={ Contact } />
    <Route path="*" component={ NotFound } />
  </Route>
);
