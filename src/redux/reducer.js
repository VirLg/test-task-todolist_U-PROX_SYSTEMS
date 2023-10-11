import { filterReducer, modalReducer, todoReducer } from './slice';
import { combineReducers } from 'redux';
export const reducer = combineReducers({
  todo: todoReducer,
  sort: filterReducer,
  modalShow: modalReducer,
});
