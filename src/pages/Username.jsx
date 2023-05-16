import { useState } from 'react';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { changeUser } from '../store/modules/user/actions';

const ExerciseTwo = () => {
  const [newName, setNewName] = useState('');

  const name = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(changeUser(newName));

    setNewName('');
  };

  return (
    <div>
      <Header text='Exercise 2 - UserName' />
      <form
        onSubmit={handleSubmit}
        className='alignCenterPage flex justify-center items-center my-5'
      >
        <input
          type='text'
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className='text-black p-2 h-12 rounded-l-md w-full outline-none'
        />
        <button
          type='submit'
          className='h-12 w-52 px-4 bg-blue-500 rounded-r-md hover:bg-blue-700 transition-all font-bold'
        >
          Alterar nome
        </button>
      </form>

      <h1 className='text-white w-full text-center font-bold text-3xl mt-12'>
        {name}
      </h1>
    </div>
  );
};

export default ExerciseTwo;
