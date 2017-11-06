export const SELECT_RESPONSE = 'SELECT_RESPONSE';
export const VOTE = 'VOTE';

export const select_response = (answerId) => {
  return {
    type: SELECT_RESPONSE,
    answerId
  }
};

export const vote = (questionId, answerId) => {
  return {
    type: VOTE,
    questionId,
    answerId
  }
};