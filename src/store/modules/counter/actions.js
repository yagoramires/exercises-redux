import { ADD_COUNT, REMOVE_COUNT } from './actionTypes';

export const addCounter = (value) => ({
  type: ADD_COUNT,
  payload: value,
});

export const removeCounter = (value) => ({
  type: REMOVE_COUNT,
  payload: value,
});
