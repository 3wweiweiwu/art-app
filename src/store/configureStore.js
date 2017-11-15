import { createStore } from 'redux';
// import { createStore, applyMiddleware } from 'redux';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers/index';

export default function configureStore(initialState) {
  // return createStore(rootReducer, initialState, applyMiddleware(reduxImmutableStateInvariant()));
  return createStore(rootReducer, initialState);
}
