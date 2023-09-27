import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {legacy_createStore as createStore} from 'redux';
import {compose} from 'redux';
import {Provider} from 'react-redux'
import {rootReducer} from './redux/rootReducer';

const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


reportWebVitals();
