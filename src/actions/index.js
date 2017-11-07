export const VOTE = 'VOTE';

export const vote = (questionId, answerId) => {
  return {
    type: VOTE,
    payload: {questionId, answerId}
  }
};