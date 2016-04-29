import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import createLogger from 'redux-logger';

import 'file?name=[name].[ext]!../index.html';
import './app.scss';

import routes from './routes';
import reducers from './reducers/index';

const loggerMiddleware = createLogger(),
      store = createStore(
        reducers,
        applyMiddleware(
          loggerMiddleware
        )
      );

ReactDOM.render(
  <Provider store={ store }>
    <Router routes={ routes } history={ browserHistory } />
  </Provider>,
  document.querySelector('.container')
);
