import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "./App.css";
import Home from "./Home";
import Categories from "./Categories";
import Explore from "./Explore";
import Blogs from "./Blogs";
// import Footer from "./Footer";
import Footer2 from "./Footer2";
import { ThemeProvider, createTheme } from '@mui/material/styles';


import 'aos/dist/aos.css';

// import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import About_Us from "./About_Us";
import ContactUs from "./ContactUs";
import WildCard from "./WildCard";
import BiddingPage from "./BiddingPage";
import Login_Form from "./Login_Form";


const AppLayout = () => {
  return (
    <>
      <Navbar />
   
      <Footer2 />
    </>
  );
};

const App = () => {
  return (
    <React.StrictMode>
      <Router>
      <Routes>
        <Route path="" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="explore" element={<Explore />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path='about' element={<About_Us/>} />
          <Route path='contact' element={<ContactUs/>} />

          <Route path="/bidding-page" element={<BiddingPage />} />
          <Route path="/login-form" element={<Login_Form/>} />

        </Route>
        <Route path="*" element={<WildCard/>} />

      </Routes>
    </Router>
    </React.StrictMode>
  );
};

export default App;
