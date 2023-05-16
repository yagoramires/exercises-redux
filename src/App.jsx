import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import ExerciseTwo from './pages/ExerciseTwo';

function App() {
  return (
    <div className='bg-zinc-900 min-h-screen text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/introduction' element={<Introduction />} />
        <Route path='/username' element={<ExerciseTwo />} />
      </Routes>
    </div>
  );
}

export default App;
