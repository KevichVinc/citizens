import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './frontendPart/App';
import store from './frontendPart/redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

module.hot.accept();
