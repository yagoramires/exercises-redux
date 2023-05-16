import { ADD_MESSAGE } from './actionType';

const initialState = {
  chat: 'CHAT',
  messages: [{ user: 'userA', text: 'Olá, envie uma mensagem para começar!' }],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};

export default chatReducer;
