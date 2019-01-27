import { createStore, compose, applyMiddleware } from 'redux';
import mainReducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
export default createStore(
  mainReducer,
  compose(
    applyMiddleware(logger, thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f,
  ),
);
