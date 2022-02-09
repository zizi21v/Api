import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {CardsBox} from './views/CardsBox';



function App() {
  return (
    <div className='App'>
     <BrowserRouter>
    <nav>
     
      <li>
        <Link to="/index">Characarters</Link>
      </li>
    </nav>
    <Routes>
      
      <Route path="/index" element={<CardsBox/>}></Route>
  
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
