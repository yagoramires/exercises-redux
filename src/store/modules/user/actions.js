import { CHANGE_USER } from './actionTypes';

export const changeUser = (user) => ({
  type: CHANGE_USER,
  payload: user,
});
