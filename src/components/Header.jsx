import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Header = ({ text }) => {
  const navigate = useNavigate();

  const handleBackPage = () => {
    navigate(-1);
  };

  return (
    <div className='w-full bg-zinc-800 py-5 '>
      <div className='alignCenterPage flex items-center'>
        <IoIosArrowBack
          size={20}
          className='hover:text-blue-500 cursor-pointer'
          onClick={handleBackPage}
        />
        <h1 className='text-2xl font-bold flex-1 text-center'>{text}</h1>
      </div>
    </div>
  );
};

export default Header;
