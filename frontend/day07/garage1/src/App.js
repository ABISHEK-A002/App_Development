import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './Pages/Auth/registration.jsx';
import Login from './Pages/Auth/login.jsx';
import NavBar from './Components/NavBar.jsx';
import HomePage from './Pages/User/homepage.jsx';
import Tutorial from './Pages/User/tutorial.jsx';
import Community from './Pages/User/community.jsx';
import LandingPage from './Pages/LandingPage.jsx';
import Product from './Pages/User/product.jsx';
import AboutUs from './Pages/User/aboutus.jsx';
import Services from './Pages/User/service.jsx';
import CustomerRegistration from './Pages/Auth/registration_customer.jsx';
import AdminDashboard from './Pages/Admin/dashboard.jsx';
import Repairs from './Pages/User/repair.jsx';
import AdminLogin from './Pages/Auth/adminlogin.jsx';

const App = () => {
  const [registrations, setRegistrations] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/registration" element={<Registration setRegistrations={setRegistrations} />} />
        <Route
          path="/login"
          element={<Login registrations={registrations} />}
        />
        <Route
          path="/adminlogin"
          element={<AdminLogin registrations={registrations} />}
        />
        <Route path="/cuslogin" element={<Login registrations={registrations} />} />
        <Route path="/nav" element={<NavBar />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/product" element={<Product />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/registration_customer" element={<CustomerRegistration />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/repair" element={<Repairs />} />
      </Routes>
    </Router>
  );
};

export default App;
