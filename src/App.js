import React from "react";
import Home from "./pages/home/Home";
import HowItsWork from "./pages/howItsWork/HowItsWork.js";
import Shop from "../src/pages/shop/Shop";
import Faq from "../src/pages/FAQ/Faq";
import DeliveryInfo from "../src/pages/deliveryInfo/DeliveryInfo";
import ProcessingOrder from "../src/pages/processingOder/ProcessingOrder";
import ContactUs from "../src/pages/contactUs/ContactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageOne from "./pages/cartPages/PageOne";
import SelectMedi from "./pages/cartPages/SelectMedi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WishList from "../src/pages/wishList/WishList";
import OnlineDoctor from "../src/pages/footerPages/onlineDoctor/OnlineDoctor";
import TandC from "./pages/footerPages/T&C/TandC";
import PrivacyPolicy from "./pages/footerPages/privacyPolicy/PrivacyPolicy";
import Disclaimer from "./pages/footerPages/disclaimer/Disclaimer";
import Refund from "./pages/footerPages/refund/Refund";
import FakePharma from "./pages/footerPages/fakePharmacy/FakePharma";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/howItsWork" element={<HowItsWork />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/deliveryInfo" element={<DeliveryInfo />} />
          <Route path="/processingOrder" element={<ProcessingOrder />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/pageOne" element={<PageOne />} />
          <Route path="/selectMedi/:id" element={<SelectMedi />} />
          <Route path="/wishList" element={<WishList />} />
          <Route path="/onlineDoctor" element={<OnlineDoctor />} />
          <Route path="/tandC" element={<TandC />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/fakePharma" element={<FakePharma />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
