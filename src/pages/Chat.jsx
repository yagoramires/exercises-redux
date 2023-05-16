import { useState } from 'react';
import Header from '../components/Header';
import MessageCard from '../components/MessageCard';

import { BsSend } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addMessageThunk } from '../store/modules/chat/thunks';

const Chat = () => {
  const [messageA, setMessageA] = useState('');
  const [messageB, setMessageB] = useState('');

  const chat = useSelector((state) => state.chat);

  const dispatch = useDispatch();

  const handleSubmitUserA = (e) => {
    e.preventDefault();
    if (messageA) {
      dispatch(addMessageThunk('userA', messageA));
    }
  };

  const handleSubmitUserB = (e) => {
    e.preventDefault();
    if (messageB) {
      dispatch(addMessageThunk('userB', messageB));
    }
  };

  return (
    <div>
      <Header text='Chat' />

      <div className='p-4 min-h-[calc(100vh-144px)]'>
        {chat.messages.map((message, index) => (
          <div
            className={`w-full flex ${
              message.user === 'userA' ? 'justify-start' : 'justify-end'
            }`}
            key={index}
          >
            <MessageCard message={message.text} />
          </div>
        ))}
      </div>

      <div className='flex items-center justify-between bg-zinc-800 p-4'>
        <form
          onSubmit={handleSubmitUserA}
          className='flex rounded-md overflow-hidden w-[45%]'
        >
          <input
            type='text'
            placeholder='Usuário A'
            value={messageA}
            onChange={(e) => setMessageA(e.target.value)}
            className='h-10 rounded-l-md w-full text-black outline-none px-2'
          />
          <button type='submit' className=' bg-green-400 px-4 rounded-r-md'>
            <BsSend />
          </button>
        </form>

        <form
          onSubmit={handleSubmitUserB}
          className='flex rounded-md overflow-hidden w-[45%]'
        >
          <input
            type='text'
            placeholder='Usuário B'
            value={messageB}
            onChange={(e) => setMessageB(e.target.value)}
            className='h-10 rounded-l-md w-full text-black outline-none px-2'
          />
          <button type='submit' className=' bg-green-400 px-4 rounded-r-md'>
            <BsSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
