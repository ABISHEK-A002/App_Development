import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Registration from './Pages/Auth/registration.jsx';
// import Login from './Pages/Auth/login.jsx';
// import NavBar from './Components/NavBar.jsx';
import Tutorial from './Pages/User/tutorial.jsx';
const App = () => {
  const [registrations, setRegistrations] = useState([]);

  return (
    <Tutorial />
    // <Router>
    //   <Routes>
    //     <Route
    //       path="/registration"
    //       element={<Registration setRegistrations={setRegistrations} />}
    //     />
    //     <Route
    //       path="/login"
    //       element={<Login registrations={registrations} />}
    //     />
    //     <Route path="/nav" element={<NavBar />} />
    //     <Route path="/" element={<Registration setRegistrations={setRegistrations} />} />
    //   </Routes>
    // </Router>
  );
};

export default App;