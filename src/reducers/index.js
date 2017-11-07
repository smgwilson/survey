import { combineReducers } from 'redux';
import { VOTE } from '../actions/index.js';

export const questionReducer = (state = {}, action) => {
  switch(action.type) {
    case VOTE:
      const responses = action.payload.questionId.answers;
      const index = responses.findIndex(response => response.id === action.payload.answerId);
      const newTally = responses[index].responses + 1;
      const newState = action.payload ;
      return { 
        ...newState, 
        questionId: newState.questionId.answers.map(
            (answer, i) => i === index ? {...answer, responses: newTally} : answer)
      }
      default:
        return state;
  }
}

export default combineReducers( {votes: questionReducer} );