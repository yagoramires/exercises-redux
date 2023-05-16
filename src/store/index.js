import { createStore, combineReducers } from 'redux';

// importando reducers
import fruitsReducer from './modules/fruits/reducer';

// combinando varios reducers
const reducers = combineReducers({ fruits: fruitsReducer });

// passando reducers para store
const store = createStore(reducers);

export default store;
