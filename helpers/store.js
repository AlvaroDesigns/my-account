import { createStore, combineReducers } from 'redux';
import {
  Provider as ReduxProvider,
  useSelector,
  useDispatch,
} from 'react-redux';
import user from './user';

const store = createStore(combineReducers({ user }));

const Provider = ({ children }) => (
  <ReduxProvider store={store}>{children}</ReduxProvider>
);

export { Provider, useSelector, useDispatch };
