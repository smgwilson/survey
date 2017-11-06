import { combineReducers } from 'redux';
import { SELECT_RESPONSE, VOTE } from '../actions/index.js';

export const tallyVotes = (state = {}, action) => {
  switch(action.type) {
    case VOTE:
      return action;
    default:
     return state;
  }
}

export const surveyResponse = (state = -1, action) => {
  switch(action.type) {
    case SELECT_RESPONSE:
      return action;
    default:
      return state;
  }
}

export default combineReducers( {surveyResponse, tallyVotes} );