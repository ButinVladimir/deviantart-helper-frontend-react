import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import config from './config';
import App from './AppContainer';
import reducer from './redux/reducers';
import './index.css';

const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
  (
    <Provider store={store}>
      <App config={config} />
    </Provider>
  ),
  document.getElementById('root'),
);
