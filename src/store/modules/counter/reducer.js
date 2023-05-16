import { ADD_COUNT, REMOVE_COUNT } from './actionTypes';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_COUNT: {
      const value = action.payload;
      return state + value;
    }
    case REMOVE_COUNT: {
      const value = action.payload;
      return state - value;
    }
    default:
      return state;
  }
};

export default counterReducer;
