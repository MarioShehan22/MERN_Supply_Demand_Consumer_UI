import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProductPage from "./pages/ProductPage";
import React from "react";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import RatingsPage from "./pages/RatingsPage";
import Layout from "./layouts/layout";
import OrderDetails from "./pages/OrderDetails";
import AboutUsPage from "./pages/AboutUsPage";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><HomePage/></Layout>}/>
          <Route path="/product-page" element={<ProductPage/>}/>
          <Route path="/place-order" element={<Layout><PlaceOrderPage/></Layout>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/rating" element={<Layout><RatingsPage/></Layout>}/>
          <Route path="/order-details" element={<Layout><OrderDetails/></Layout>}/>
          <Route path="/about-us" element={<Layout><AboutUsPage/></Layout>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
