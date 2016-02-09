import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

require('file?name=[name].[ext]!../index.html');
import './app.scss';

import routes from './routes';
import reducers from './reducers/index';

const logger = createLogger(),
      store = createStore(
        reducers,
        applyMiddleware(
          logger
        )
      );

ReactDOM.render(
  <Provider store={ store }>
    { routes }
  </Provider>,
  document.querySelector('.container')
);
