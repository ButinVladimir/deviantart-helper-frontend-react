import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import config from './config';
import App from './AppContainer';
import reducer from './redux/reducers/reducer';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './index.css';

const store = createStore(reducer, applyMiddleware(thunk));
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
