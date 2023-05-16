import { createStore, combineReducers } from 'redux';

// importando reducers
import fruitsReducer from './modules/fruits/reducer';
import userReducer from './modules/user/reducer';
import counterReducer from './modules/counter/reducer';

// combinando varios reducers
const reducers = combineReducers({
  fruits: fruitsReducer,
  user: userReducer,
  counter: counterReducer,
});

// passando reducers para store
const store = createStore(reducers);

export default store;
