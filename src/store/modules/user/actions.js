import { CHANGE_USER } from './actionType';

export const changeUser = (user) => ({
  type: CHANGE_USER,
  payload: user,
});
