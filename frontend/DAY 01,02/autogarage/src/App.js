import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './pages/Auth/registration.jsx';
import Login from './pages/Auth/login.jsx';
import NavBar from './components/UI/NavBar.jsx';

const App = () => {
  const [registrations, setRegistrations] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          path="/registration"
          element={<Registration setRegistrations={setRegistrations} />}
        />
        <Route
          path="/login"
          element={<Login registrations={registrations} />}
        />
        <Route path="/nav" element={<NavBar />} />
        <Route path="/" element={<Registration setRegistrations={setRegistrations} />} />
      </Routes>
    </Router>
  );
};

export default App;
