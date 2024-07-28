import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './Pages/Auth/registration.jsx';
import Login from './Pages/Auth/login.jsx';
import NavBar from './Components/NavBar.jsx';
import HomePage from './Pages/User/homepage.jsx';
import Tutorial from './Pages/User/tutorial.jsx';
import Community from './Pages/User/community.jsx';

const App = () => {
  const [registrations, setRegistrations] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/registration" element={<Registration setRegistrations={setRegistrations} />} />
        <Route path="/login" element={<Login registrations={registrations} />} />
        <Route path="/nav" element={<NavBar />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/community" element={<Community />} />
        <Route path="/" element={<Registration setRegistrations={setRegistrations} />} />
      </Routes>
    </Router>
  );
};

export default App;
