import { createStore } from 'redux';
import todoApp from '../reducers/TodoReducer';
let store = createStore(todoApp);