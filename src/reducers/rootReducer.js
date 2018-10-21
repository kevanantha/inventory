import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import itemReducer from './itemReducer';

export default combineReducers({
  items: itemReducer,
  form
});
