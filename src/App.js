import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./App.css"; // Import the CSS file
import { Route,Routes } from "react-router-dom";
import ProductList from './/Pages/ProductList'
import ContactUs from './/Pages/ContactUs'
import AboutUs from './/Pages/AboutUs'
import Cart from './/Pages/Cart'
import OrderConfirmation from './/Pages/OrderConfirmaton'
import Product from './/Pages/Product'
import SignUp from './/Pages/SignUp'
import PlaceOrder from './/Pages/PlaceOrder'
import Login from './/Pages/Login'


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        {/* Main content goes here */}
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/contact" element={<ContactUs/>}></Route>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="order-confirmation" element={<OrderConfirmation/>}/>
        <Route path="product/:id" element={<Product/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="signin" element={<Login/>}/>
        <Route path="place-order" element={<PlaceOrder/>}/>
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
