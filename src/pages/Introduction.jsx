import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IoCloseSharp } from 'react-icons/io5';

import { addFruit, removeFruit } from '../store/modules/fruits/actions';

import Header from '../components/Header';

const Introduction = () => {
  const [newFruit, setNewFruit] = useState('');

  const fruits = useSelector((state) => state.fruits);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addFruit(newFruit));
  };

  const handleDelete = (name) => {
    dispatch(removeFruit(name));
  };

  return (
    <div>
      <Header text='Exercise 1 - Fruit List' />
      <form
        onSubmit={handleSubmit}
        className='alignCenterPage flex justify-center items-center my-5'
      >
        <input
          type='text'
          value={newFruit}
          onChange={(e) => setNewFruit(e.target.value)}
          className='text-black p-2 h-12 rounded-l-md w-full outline-none'
        />
        <button
          type='submit'
          className='h-12 w-52 px-4 bg-blue-500 rounded-r-md hover:bg-blue-700 transition-all font-bold'
        >
          Adicionar fruta
        </button>
      </form>
      <ul className='alignCenterPage'>
        {fruits?.map((fruit, index) => (
          <li
            key={index}
            className='font-bold flex items-center justify-between mb-2'
          >
            {fruit}
            <button onClick={() => handleDelete(fruit)}>
              <IoCloseSharp className='text-red-500' size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Introduction;
