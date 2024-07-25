import React, { useEffect } from 'react';
import '../../assets/NavBar.css'; 
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
    <div className="nav-bar">
      <div className="nav-logo">AUTOGARAGE</div>
      <div className="nav-links-container">
        <a className="nav-link active" href="#topSection" id="topLink">Home</a>
        <a className="nav-link" href="#aboutSection" id="aboutLink">About Us</a>
        <a className="nav-link" href="#portfolioSection" id="portfolioLink">Repair</a>
        <a className="nav-link" href="#teamSection" id="teamLink">Team</a>
        <a className="nav-link" href="#servicesSection" id="servicesLink">Services</a>
        <a className="nav-link" href="#priceSection" id="priceLink">Price</a>
        <a className="nav-link" href="#contactSection" id="contactLink">Contact</a>
        <a className="nav-link">Blog</a>
      </div>
    </div>
  );
};

export default NavBar;
