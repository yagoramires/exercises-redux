import { createStore, combineReducers, applyMiddleware } from 'redux';

// importando reducers
import fruitsReducer from './modules/fruits/reducer';
import userReducer from './modules/user/reducer';
import counterReducer from './modules/counter/reducer';
import chatReducer from './modules/chat/reducer';
import thunk from 'redux-thunk';

// combinando varios reducers
const reducers = combineReducers({
  fruits: fruitsReducer,
  user: userReducer,
  counter: counterReducer,
  chat: chatReducer,
});

// passando reducers para store
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
