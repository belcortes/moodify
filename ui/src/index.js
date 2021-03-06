import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'

import reducers from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  reducers,
  applyMiddleware(ReduxPromise),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
	<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
