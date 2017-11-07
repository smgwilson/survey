import { combineReducers } from 'redux';
import { VOTE } from '../actions/index.js';

export const questionReducer = (state = {}, action) => {
  switch(action.type) {
    case VOTE:
      return action.payload;
    default:
     return state;
  }
}

export default combineReducers( {votes: questionReducer} );