import { ADD_MESSAGE } from './actionType';

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message,
});
