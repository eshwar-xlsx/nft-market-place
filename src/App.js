import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "./App.css";
import Home from "./Home";
import Categories from "./Categories";
import Explore from "./Explore";
import Blogs from "./Blogs";
import Footer2 from "./Footer2";
import About_Us from "./About_Us";
import ContactUs from "./ContactUs";
import WildCard from "./WildCard";
import BiddingPage from "./BiddingPage";
import Login_Form from "./Login_Form";
import CartSummary from "./CartSummary"; // Make sure to import the CartSummary component

const AppLayout = () => {
  return (
    <>
      <Navbar />
      
      <Footer2 />
    </>
  );
};

const App = () => {
  const [cartItems, setCartItems] = useState([]); // Manage cart state here

  return (
    <React.StrictMode>
      <Router>
        <Routes>
          {/* Wrap all the routes inside the AppLayout */}
          <Route path="" element={<AppLayout />}>
            {/* Define the main routes */}
            <Route index element={<Home />} />
            <Route path="categories" element={<Categories setCartItems={setCartItems} />} />
            <Route path="explore" element={<Explore />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="about" element={<About_Us />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="/bidding-page" element={<BiddingPage />} />
            <Route path="/login-form" element={<Login_Form />} />

            {/* Cart route */}
            <Route path="/cart" element={<CartSummary cartItems={cartItems} />} />
          </Route>

          {/* WildCard for unmatched routes */}
          <Route path="*" element={<WildCard />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

export default App;
