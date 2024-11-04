import './App.css';
import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Home from './pages/Home.js';
//import Search from __
// import Results from __

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      
    </div>
  );
}

export default App;
