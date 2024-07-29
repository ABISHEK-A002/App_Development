import React from 'react';
import '../../Assets/Styles/User/repair.css';
import NavBar from '../../Components/NavBar';
import { FaMapMarkedAlt, FaStar } from 'react-icons/fa';
import Footer from '../../Components/Footer';


const repairsData = [
  {
    id: 1,
    image: 'https://media.istockphoto.com/id/1391875986/photo/modern-empty-garage-interior-with-working-equipments-and-tools.jpg?s=612x612&w=0&k=20&c=K3hw8O7oB3YDaBULEhLFI2KCTmIHPybWW8yd0SPXnWk=', // Replace with actual image URLs
    garageName: 'Garage One',
    contact: '123-456-7890',
    email: 'contact@garageone.com',
    address: '123 Main St, City, Country',
    rating: '4',
    mapLink: 'https://www.google.com/maps?q=loc:40.712776,-74.005974' // Replace with actual map links
  },
  {
    id: 2,
    image: 'https://t3.ftcdn.net/jpg/06/41/73/20/360_F_641732036_if4Eq4gHSoPiDmmxIcim0FDPkjWGYlOq.jpg',
    garageName: 'Garage Two',
    contact: '234-567-8901',
    email: 'contact@garagetwo.com',
    address: '456 Elm St, City, Country',
    rating: '5',
    mapLink: 'https://www.google.com/maps?q=loc:34.052235,-118.243683'
  },
  {
    id: 3,
    image: 'https://static.vecteezy.com/system/resources/previews/030/470/250/large_2x/car-engine-in-repair-shop-auto-service-industry-automotive-background-ai-generated-photo.jpg',
    garageName: 'Garage Three',
    contact: '345-678-9012',
    email: 'contact@garagethree.com',
    address: '789 Pine St, City, Country',
    rating: '3',
    mapLink: 'https://www.google.com/maps?q=loc:37.774929,-122.419418'
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/100',
    garageName: 'Garage Four',
    contact: '456-789-0123',
    email: 'contact@garagefour.com',
    address: '101 Maple St, City, Country',
    rating: '4',
    mapLink: 'https://www.google.com/maps?q=loc:51.507351,-0.127758'
  }
];


const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          size={20}
          color={i <= rating ? 'gold' : 'gray'}
        />
      );
    }
    return stars;
  };

  
const Repair = ({ repair }) => {
    return (
      <div>
        <NavBar />
        <div className='repair-body-img'></div>
        <div className='repair-body-bg'></div>
        <div className='repair-body-content'>
          <div className={`repair-body repair-${repair.id}`}>
            <img src={repair.image} alt={repair.garageName} className="repair-image" />
            <div className="repair-details">
              <h3>{repair.garageName}</h3>
              <p><span className='repair-p'>Contact: </span>{repair.contact}</p>
              <p><span className='repair-p'>Email: </span>{repair.email}</p>
              <p><span className='repair-p'>Address: </span>{repair.address}</p>
              <p><span className='repair-p'>Rating: </span></p>
                <span className='repair-rating'>{renderStars(parseInt(repair.rating))}
                </span>

            </div>
            <a href={repair.mapLink} target="_blank" rel="noopener noreferrer" className="repair-map-link">
              <FaMapMarkedAlt size={30} color='red' style={{position:'relative', right:'3vw'}} />
            </a>
          </div>
        </div>
      </div>
    );
  };
  

const Repairs = () => {
  return (
    <div>
    <div className="repairs">
      {repairsData.map(repair => (
        <Repair key={repair.id} repair={repair} />
      ))}
    </div>
    <Footer />
    </div>
  );
};

export default Repairs;
