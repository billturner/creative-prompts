import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import App from './components/app';
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
    <App />
  </Provider>,
  document.querySelector('.container')
);
