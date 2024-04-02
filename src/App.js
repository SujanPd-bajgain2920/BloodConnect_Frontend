// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import Register from "./auth/Register";
import "./App.css";
import Login from "./auth/Login";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Layout from "./Layout";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsCondition from "./Components/TermsCondition";
import Profile from "./Components/Profile";
import requireAuth from "./requireAuth";
import { ToastContainer } from "react-toastify";
import DonateBlood from "./Components/DonateBlood/DonateBlood.js";
import SearchBlood from "./Components/RequestBlood/SearchBlood";

function App(props) {
  return (
    <div>
      <ToastContainer theme="colored" position="top-center"></ToastContainer>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/requestblood"
              element={
                <requireAuth>
                  <SearchBlood />
                </requireAuth>
              }
            />
            <Route
              path="/donateblood"
              element={
                <requireAuth>
                  <DonateBlood />
                </requireAuth>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/termscondition" element={<TermsCondition />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
