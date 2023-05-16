import { CHANGE_USER } from './actionType';

const userReducer = (state = 'Yago', action) => {
  switch (action.type) {
    case CHANGE_USER: {
      const newName = action.payload;
      return newName;
    }

    default:
      return state;
  }
};

export default userReducer;
