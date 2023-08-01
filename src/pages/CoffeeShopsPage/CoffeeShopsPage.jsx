import { useState, useEffect } from 'react';
import axios from 'axios';
import Shop from './Shop';
import Edit from '../../components/Edit/Edit';
import { Link } from 'react-router-dom';
import { makeGoogleMapsLink } from '../../index'; 

export default function CoffeeShopsPage() {
  const [coffeeShop, setCoffeeShop] = useState([]);

  const getCoffeeShop = () => {
    axios.get('http://localhost:3000/coffeeshops')
      .then((response) => setCoffeeShop(response.data))
      .catch((error) => console.log(error));
  };

  const handleEdit = (editedShop) => {
    axios.put('http://localhost:3000/coffeeshops/' + editedShop._id, editedShop)
      .then((response) => {
        getCoffeeShop();
      });
  };

  const handleDelete = (deletedShop) => {
    axios.delete('http://localhost:3000/coffeeshops/' + deletedShop._id)
      .then((response) => {
        getCoffeeShop();
      });
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
              {/* Uncomment the following lines if needed */}
              {/* <Edit shop={shop} handleEdit={handleEdit} /> */}
              {/* <button onClick={() => handleDelete(shop)}>Delete</button> */}
              <Link to={`/details/${shop._id}`}>Details</Link>
            </div>
          </div>
        );
      })}
    </>
  );
}