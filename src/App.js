
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Beaches from './components/Beaches';
import Birds from './components/Birds';
import Food from './components/Food';
import Mountains from './components/Mountains';
import Search from './components/Search';
import TopNavBar from './components/TopNavBar';

function App() {
  return (
    <div className="App">
      <TopNavBar />

      <Routes>
        <Route path='/mountains' element={<Mountains />} />
        <Route path='/birds' element={<Birds />} />
        <Route path='/beaches' element={<Beaches />} />
        <Route path='/Food' element={<Food />} />
        <Route path='/search' element={<Search />} />

      </Routes>

    </div>
  );
}

export default App;
