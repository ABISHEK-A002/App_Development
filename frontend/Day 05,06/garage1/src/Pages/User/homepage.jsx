import React from 'react';
import '../../Assets/Styles/User/homepage.css'; // Ensure this path is correct
import CustomCarAnimation from '../../Components/CarAnimation'; // Ensure this path is correct
import NavBar from '../../Components/NavBar'; // Ensure this path is correct
import ScrollDownArrow from '../../Components/ScrollDownArrow';

const HomePage = () => {
  return (
    <div>
        <div className='bg-image'><div className='homebgcolor'></div></div>
        <NavBar />
        
        <div className='homepage-text1'>WELCOME TO THE PIT STOP</div>
        <div className='homepage-text2'>Where Every Vehicle Leaves Like a Star on the Road!</div>
        <ScrollDownArrow />
        <div style={{position: 'absolute', top:'150vh', left: '50vw', transform: 'translate(-50%, -50%)', color: 'white'}}>
          <h1>Sample Test</h1>
        </div>
    </div>
  );
};

export default HomePage;
