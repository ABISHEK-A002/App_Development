import React from 'react';
import '../../Assets/Styles/User/tutorial.css'; // Make sure to create and import your CSS
import NavBar from '../../Components/NavBar';
const Tutorial = () => {
  return (
    <div >
      <NavBar />
      <div className='background-img'></div>
      <div className='tutorial-body'>
  <h1 className='title'>Repair Guides</h1>
  <a href="https://example.com/engine_problems.pdf" target="_blank" rel="noopener noreferrer">
  <div className="flip">
    <div className="front" style={{ backgroundImage: 'url(https://images.pexels.com/photos/7561180/pexels-photo-7561180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
      <h1 className="text-shadow">Engine Problems</h1>
    </div>
    <div className="back">
      <h2>Engine Problems</h2>
      <p>Learn how to identify and repair typical engine problems such as overheating, misfires, and oil leaks.</p>
    </div>
  </div>
  </a>
  <a href="https://example.com/brake_repairs.pdf" target="_blank" rel="noopener noreferrer">
  <div className="flip">
    <div className="front" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
      <h1 className="text-shadow">Brake Repairs</h1>
    </div>
    <div className="back">
      <h2>Brake Repairs</h2>
      <p>Follow this guide to safely replace your brake pads and rotors, ensuring optimal braking performance.</p>
    </div>
  </div>
  </a>
  <a href="https://example.com/electrical_diagnosing.pdf" target="_blank" rel="noopener noreferrer">
  <div className="flip">
    <div className="front" style={{ backgroundImage: 'url(https://images.pexels.com/photos/8556051/pexels-photo-8556051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
      <h1 className="text-shadow">Electrical Diagnosing</h1>
    </div>
    <div className="back">
      <h2>Electrical Diagnosing</h2>
      <p>Discover techniques for diagnosing and repairing common electrical issues like faulty wiring and dead batteries.</p>
    </div>
  </div>
  </a>
  <a href="https://example.com/transmission_fluid.pdf" target="_blank" rel="noopener noreferrer">
  <div className="flip">
    <div className="front" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
      <h1 className="text-shadow">Transmission Fluid</h1>
    </div>
    <div className="back">
      <h2>Transmission Fluid</h2>
      <p>Learn how to change transmission fluid and identify issues like slipping or rough shifting in your vehicle.</p>
    </div>
  </div>
    </a>
  <br />
  <br />
  <h1 className='title'>Video Tutorial</h1>
  <a href="https://example.com/suspension_repairs.pdf" target="_blank" rel="noopener noreferrer">
  <div className="flip">
    <div className="front" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
      <h1 className="text-shadow">Suspension Repairs</h1>
    </div>
    <div className="back">
      <h2>Suspension Repairs</h2>
      <p>Watch expert mechanics demonstrate how to replace shocks and struts to improve ride quality and handling.</p>
    </div>
  </div>
  </a>
  <a href="https://example.com/air_conditioning.pdf" target="_blank" rel="noopener noreferrer">
  <div className="flip">
    <div className="front" style={{ backgroundImage: 'url(https://images.pexels.com/photos/10611959/pexels-photo-10611959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
      <h1 className="text-shadow">Air Conditioning</h1>
    </div>
    <div className="back">
      <h2>Air Conditioning</h2>
      <p>Follow along as professionals show you how to recharge your car's AC system for optimal cooling performance.</p>
    </div>
  </div>
  </a>
  <a href="https://example.com/battery_replacement.pdf" target="_blank" rel="noopener noreferrer">
  <div className="flip">
    <div className="front" style={{ backgroundImage: 'url(https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)' }}>
      <h1 className="text-shadow">Battery Replacement</h1>
    </div>
    <div className="back">
      <h2>Battery Replacement</h2>
      <p>Learn the proper steps for removing an old battery and installing a new one to ensure reliable vehicle startup.</p>
    </div>
  </div>
  </a>
  <a href="https://example.com/tire_maintenance.pdf" target="_blank" rel="noopener noreferrer">
  <div className="flip">
    <div className="front" style={{ backgroundImage: 'url(https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)' }}>
      <h1 className="text-shadow">Tire Maintenance</h1>
    </div>
    <div className="back">
      <h2>Tire Maintenance</h2>
      <p>See how mechanics rotate and balance tires to extend their lifespan and improve vehicle stability.</p>
    </div>
  </div>
  </a>
  <h1 className='title'>How to Article</h1>
  <a href="https://example.com/oil_change.pdf" target="_blank" rel="noopener noreferrer">
  <div className="flip">
    <div className="front" style={{ backgroundImage: 'url(https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
      <h1 className="text-shadow">Oil Change</h1>
    </div>
    <div className="back">
      <h2>Oil Change</h2>
      <p>Good tools make application development quicker and easier to maintain than if you did everything by hand.</p>
    </div>
  </div>
  </a>
  <a href="https://example.com/brakes.pdf" target="_blank" rel="noopener noreferrer">
  <div className="flip">
    <div className="front" style={{ backgroundImage: 'url(https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)' }}>
      <h1 className="text-shadow">Replacing Air Filters</h1>
    </div>
    <div className="back">
      <h2>Replacing Air Filters</h2>
      <p>Swap out old air filters by locating them in the engine compartment and installing new ones to ensure optimal engine performance.</p>
    </div>
  </div>
  </a>
  <a href="https://example.com/ocean.pdf" target="_blank" rel="noopener noreferrer">
  <div className="flip">
    <div className="front" style={{ backgroundImage: 'url(https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)' }}>
      <h1 className="text-shadow">Replacing Headlights</h1>
    </div>
    <div className="back">
      <h2>Replacing Headlights</h2>
      <p>Follow the guide to safely remove old headlights and install new ones for improved visibility and enhanced vehicle appearance.</p>
    </div>
  </div>
  </a>
  <a href="https://example.com/angular.pdf" target="_blank" rel="noopener noreferrer">
  <div className="flip">
    <div className="front" style={{ backgroundImage: 'url(https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)' }}>
      <h1 className="text-shadow">Checking the Silencer</h1>
    </div>
    <div className="back">
      <h2>Checking the Silencer</h2>
      <p>Understand how to inspect and maintain your vehicle's silencer to reduce noise and ensure optimal exhaust performance.</p>
    </div>
  </div>
</a>
</div>
      </div>
  );
};

export default Tutorial;
