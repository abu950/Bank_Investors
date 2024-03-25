// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persister, store } from './service/config';

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persister}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById('root')
);
