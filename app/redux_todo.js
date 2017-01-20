import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TodoReducer from './redux/reducers/TodoReducer';
import App from './redux/components/App';

let store = createStore(TodoReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);