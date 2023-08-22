import './styles/App.css';
import Home from './pages/home.js';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import AllProducts from './components/allProducts';
import AllCategory from './components/allCategory';

function App() {
  return ( 
    <>
    <Navbar />
    <div>
      <Routes>        
        <Route path="/"  element={<Home/>} />
        <Route path="/allProducts"  element={<AllProducts />}/>
        <Route path="/allCategories"  element={<AllCategory/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
