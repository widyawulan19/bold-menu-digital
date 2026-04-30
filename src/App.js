import logo from './logo.svg';
import './App.css';
import Welcome from './Pages/Welcome';
import { Routes, Route } from 'react-router-dom';
import Menu from './Pages/Menu';
import ChoosePage from './Pages/ChoosePage';
import BoldWelcome from './Pages/BoldWelcome';
import MealsMenu from './Pages/MealsMenu';
import dataMeals from './Data/MealsData.json';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/choose' element={<ChoosePage />} />

        <Route path='/' element={<BoldWelcome />} />
        <Route path='/meals-menu/:categoryName' element={<MealsMenu data={dataMeals} />} />
      </Routes>
    </div>
  );
}

export default App;
