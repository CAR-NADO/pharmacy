import React from 'react';
import Home from './pages/home/Home';
import HowItsWork from './pages/howItsWork/HowItsWork.js';
import Shop from '../src/pages/shop/Shop';
import Faq from '../src/pages/FAQ/Faq';
import DeliveryInfo from '../src/pages/deliveryInfo/DeliveryInfo';
import ProcessingOrder from '../src/pages/processingOder/ProcessingOrder';
import ContactUs from '../src/pages/contactUs/ContactUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/howItsWork' element={ <HowItsWork /> } />
        <Route path='/shop' element={ <Shop /> } />
        <Route path='/faq' element={<Faq />} />
        <Route path='/deliveryInfo' element={<DeliveryInfo />} />
        <Route path='/processingOrder' element={<ProcessingOrder />} />
        <Route path='/contactUs' element={<ContactUs />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
