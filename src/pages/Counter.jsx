import { useDispatch, useSelector } from 'react-redux';
import { addCounter, removeCounter } from '../store/modules/counter/actions';
import Header from '../components/Header';
import { IoMdRemove } from 'react-icons/io';
import { IoAdd } from 'react-icons/io5';

const Counter = () => {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const remove = () => {
    dispatch(addCounter(1));
  };
  const add = () => {
    dispatch(removeCounter(1));
  };

  return (
    <div>
      <Header text='Counter' />

      <div className='alignCenterPage flex items-center justify-center  gap-16 mt-20'>
        <button className='text-2xl bg-zinc-500 p-2 rounded-md' onClick={add}>
          <IoMdRemove />
        </button>
        <h2 className='text-[160px]'>{counter}</h2>
        <button
          className='text-2xl bg-zinc-500 p-2 rounded-md'
          onClick={remove}
        >
          <IoAdd />
        </button>
      </div>
    </div>
  );
};

export default Counter;
