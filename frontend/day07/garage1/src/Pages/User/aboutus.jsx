import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../../Assets/Styles/User/aboutus.css';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
const AboutUs = () => {
  return (
    <div>
    <div className="about-us-container">
     <div > <NavBar /></div>
      <div style={{padding:'60px'}}className="about-us-content">
        <div className="about-us-header">
          <h1>About Us</h1>
        </div>
        <div className="about-us-body">
          <div className="profile-pic"></div>
          <div className="about-us-text">
            <h2>Welcome to AutoGarage,</h2>
            <p>
              At AutoGarage, your car is part of our family. Whether it’s a routine check-up or a custom upgrade, our team of expert gearheads gives your ride the VIP treatment. We live and breathe automotive excellence, always pushing the limits of what your car can achieve.
              <br /><br />
              It's amazing to see how far we've come!
              <br /><br />
              Drop a <span className="heart">♥</span> if you're as passionate about your car as we are.
              <br /><br />
              <span className="note">(NOTE: The image here is just a stand-in, our actual crew is way cooler!)</span>
              <br />
              <span className="note">* Also, that car in the pic? Absolute beauty, right?</span>
            </p>
          </div>
        </div>
        <div className="about-us-social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
      <Footer/>
      </div>
  );
};

export default AboutUs;
