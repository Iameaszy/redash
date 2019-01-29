import { combineReducers } from 'redux';
import auth from './auth';
import modal from './modals';
import fish from './fish';


export default combineReducers({
  auth,
  modal,
  fish,
});
