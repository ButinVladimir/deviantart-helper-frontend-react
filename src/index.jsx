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
import { getConfigProvider } from './components/shared/ConfigContext';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css';

const logger = createLogger({
  duration: true,
});
const store = createStore(reducer, applyMiddleware(thunk, logger));
const ConfigProvider = getConfigProvider();
ReactDOM.render(
  (
    <ConfigProvider value={config}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ConfigProvider>
  ),
  document.getElementById('root'),
);
