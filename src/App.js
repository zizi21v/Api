import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {CardsBox} from './views/CardsBox';



function App() {
  return (
    <div className='App'>
     <CardsBox/>
   </div>
  );
}

export default App;
