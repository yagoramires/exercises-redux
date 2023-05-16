const MessageCard = ({ message }) => {
  return (
    <div className='bg-green-600 p-2 max-w-[300px] rounded-lg mb-2'>
      {message}
    </div>
  );
};

export default MessageCard;
