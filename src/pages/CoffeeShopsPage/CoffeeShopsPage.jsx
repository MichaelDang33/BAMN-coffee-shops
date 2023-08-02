import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { makeGoogleMapsLink } from '../../index'; 

export default function CoffeeShopsPage() {
  const [coffeeShop, setCoffeeShop] = useState([]);

  const getCoffeeShop = () => {
    axios.get('https://bamn-coffee-shops.onrender.com/coffeeshops')
      .then((response) => setCoffeeShop(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCoffeeShop();
  }, []);

  return (
    <>
      <h1>All Coffee Shops</h1>
      {coffeeShop.map((shop) => {
        // Get the Google Maps link for the location field using the function from utilities/index.js
        const googleMapsLink = makeGoogleMapsLink(shop.location);

        return (
          <div key={shop._id}>
            <img src={shop.image} alt={shop.name} />
            <h3>Name: {shop.name}</h3>
            <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
              View Location
            </a>
            <h3>Rating: {shop.rating}</h3>
            <div>
              <Link to={`/details/${shop._id}`}>Details</Link>
            </div>
          </div>
        );
      })}
    </>
  );
}