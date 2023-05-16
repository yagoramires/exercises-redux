import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Username from './pages/Username';
import Counter from './pages/Counter';
import Chat from './pages/Chat';

function App() {
  return (
    <div className='bg-zinc-900 min-h-screen text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/introduction' element={<Introduction />} />
        <Route path='/username' element={<Username />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
