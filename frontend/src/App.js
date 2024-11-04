import './App.css';
import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Home from './pages/Home.js';
import Search from './pages/Search.js';
// import Results from __

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path = "/home" element = {<Home/>}/>
        <Route path = "/search" element = {<Search/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
