import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from '../reducers/user';

const store = createStore(
  user,
  composeWithDevTools(),
);

export default store;
