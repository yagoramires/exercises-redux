import { createStore, combineReducers } from 'redux';

// importando reducers
import fruitsReducer from './modules/fruits/reducer';
import userReducer from './modules/user/reducer';

// combinando varios reducers
const reducers = combineReducers({ fruits: fruitsReducer, user: userReducer });

// passando reducers para store
const store = createStore(reducers);

export default store;
