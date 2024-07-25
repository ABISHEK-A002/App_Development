import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../Assets/Styles/User/NavBar.css';
import $ from 'jquery';

const NavBar = () => {

  useEffect(() => {
    $(".nav-link").click(function(){
      $('html, body').animate({ scrollTop: $(this.hash).offset().top - 80 }, 1400);
      return false;
    });
    
    $(".top-link").click(function(){
      $('html, body').animate({ scrollTop: $("#topSection").offset().top }, 2000);
      return false;
    });
    
    $(window).scroll(function(){
      ($(window).scrollTop() >= 110) ? (
        $('.nav-bar').addClass('scrolled')
      ) : (
        $('.nav-bar').removeClass('scrolled')
      );
    });
    
    $(window).scroll(function(){
      if ($(window).scrollTop() >= $('#contactSection').offset().top - $(window).height()/2 ) {
        $('.nav-link').removeClass('active');
        $('#contactLink').addClass('active');
      } else if ($(window).scrollTop() >= $('#priceSection').offset().top - $(window).height()/2 ) {
        $('.nav-link').removeClass('active');
        $('#priceLink').addClass('active');
      } else if ($(window).scrollTop() >= $('#servicesSection').offset().top - $(window).height()/2 ) {
        $('.nav-link').removeClass('active');
        $('#servicesLink').addClass('active');
      } else if ($(window).scrollTop() >= $('#teamSection').offset().top - $(window).height()/2 ) {
        $('.nav-link').removeClass('active');
        $('#teamLink').addClass('active');
      } else if ($(window).scrollTop() >= $('#portfolioSection').offset().top - $(window).height()/2 ) {
        $('.nav-link').removeClass('active');
        $('#portfolioLink').addClass('active');
      } else if ($(window).scrollTop() >= $('#aboutSection').offset().top - $(window).height()/2 ) {
        $('.nav-link').removeClass('active');
        $('#aboutLink').addClass('active');
      } else if ($(window).scrollTop() >= $('#topSection').offset().top - $(window).height()/2 ) {
        $('.nav-link').removeClass('active');
        $('#topLink').addClass('active');
      }
    });
  }, []);

  return (
    <div className='bg-image'>
      <div className='nav-body'>
        <div className="nav-bar">
          <div className="nav-logo">AUTOGARAGE</div>
          <div className="nav-links-container">
            <NavLink className="nav-link" exact to="/">Home</NavLink>
            <NavLink className="nav-link" to="/portfolioSection">Repair</NavLink>
            <NavLink className="nav-link" to="/teamSection">Products</NavLink>
            <NavLink className="nav-link" to="/servicesSection">Services</NavLink>
            <NavLink className="nav-link" to="/tutorials">Tutorials</NavLink>
            <NavLink className="nav-link" to="/aboutSection">About Us</NavLink>
            {/* <NavLink className="nav-link" to="/contactSection">Contact</NavLink> */}
            <NavLink className="nav-link" to="/community">Community</NavLink>
            {/* Bell Symbol for notification */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
