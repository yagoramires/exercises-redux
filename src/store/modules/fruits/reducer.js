const initialState = ['Banana', 'Maçã', 'Uva'];

const fruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FRUIT': {
      console.log(action);

      const verify = state.filter(
        (fruit) =>
          fruit.toLocaleLowerCase() === action.payload.toLocaleLowerCase()
      );

      if (verify.length > 0) {
        console.log('Fruit already exists in array');
        return state;
      } else {
        return [...state, action.payload];
      }
    }

    case 'REMOVE_FRUIT': {
      const filteredArray = state.filter((fruit) => fruit != action.payload);

      return filteredArray;
    }
    default:
      return state;
  }
};

export default fruitsReducer;
