import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import config from './config';
import App from './AppContainer';
import reducer from './redux/reducers/reducer';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css';

const logger = createLogger({
  duration: true,
});
const store = createStore(reducer, applyMiddleware(thunk, logger));
ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <App config={config} />
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root'),
);
