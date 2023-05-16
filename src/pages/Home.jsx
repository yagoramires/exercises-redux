import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold w-full text-center p-20'>
        Redux Exercices
      </h1>

      <ul className='w-[90%] mx-auto '>
        <li className='font-bold list-disc hover:text-blue-500 transition-all duration-200'>
          <Link
            to='/introduction'
            className='hover:border-b-[1px] border-blue-500'
          >
            Introdução ao Redux
          </Link>
        </li>
        <li className='font-bold list-disc hover:text-blue-500 transition-all duration-200'>
          <Link to='/username' className='hover:border-b-[1px] border-blue-500'>
            Alterando username
          </Link>
        </li>
        <li className='font-bold list-disc hover:text-blue-500 transition-all duration-200'>
          <Link to='/counter' className='hover:border-b-[1px] border-blue-500'>
            Contador Redux
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
