import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import UseMemo from './pages/UseMemo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/Login'element={<Login/>} />
        <Route path='/Signup'element={<Signup/>} />
        <Route path='/Cart'element={<Cart/>} />
        <Route path='/UseMemo'element={<UseMemo/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
