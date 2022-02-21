import React from 'react';
import Home from './pages/home/Home';
import HowItsWork from './pages/howItsWork/HowItsWork.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/HowItsWork' element={ <HowItsWork /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
