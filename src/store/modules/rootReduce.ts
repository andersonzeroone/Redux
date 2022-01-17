import { combineReducers } from 'redux';
import cart from './cart/reduce';

//combineReducers vai unir os estados em um unico estado
export default combineReducers({
  cart,
});
