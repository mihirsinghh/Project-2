import './App.css';
import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Search from './pages/Search.js';
import Results from './pages/Results.js';
import BookInfo from './pages/BookInfo.js';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="*" element={<Search />} /> {/* Fallback to Search for unmatched paths */}
        <Route path = "/search" element = {<Search/>}/>
        <Route path = "/results" element = {<Results/>}/>
        <Route path = "/book/:id" element = {<BookInfo/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
