import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import store from './store'
import './index.css';
import App from './App';


ReactDOM.render(
  <Provider store={store}>
    <HashRouter className="App">
      <App />
    </HashRouter>

  </Provider>,
  document.getElementById('root')
);
