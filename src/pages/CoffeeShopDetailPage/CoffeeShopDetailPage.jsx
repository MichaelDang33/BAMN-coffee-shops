import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Edit from '../../components/Edit/Edit';


export default function CoffeeShopDetailPage() {
  const { id } = useParams();
  const [coffeeShop, setCoffeeShop] = useState({});
  const navigate = useNavigate();

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/coffeeshops/${id}`)
      .then(() => navigate('/coffeeshops'))
      .catch(err => console.log(err));
  }

  const handleEdit = (editedShop) => {
    axios.put(`http://localhost:3000/coffeeshops/${id}`, editedShop)
      .then(res => setCoffeeShop(res.data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    axios.get(`http://localhost:3000/coffeeshops/${id}`)
      .then(res => setCoffeeShop(res.data))
      .catch(err => console.log(err));
  }, [id]);

  // Function to convert location string to Google Maps link
  const makeGoogleMapsLink = (locationString) => {
    if (locationString && locationString.startsWith("https://www.google.com/maps")) {
      return locationString;
    } else {
      const locationEncoded = encodeURIComponent(locationString);
      return `https://www.google.com/maps?q=${locationEncoded}`;
    }
  };

  // Get the Google Maps link for the location field
  const googleMapsLink = makeGoogleMapsLink(coffeeShop.location);

  return (
    <>
      <div>
        <h1>{coffeeShop.name}</h1>
        <img src={coffeeShop.image} alt={coffeeShop.name} />
        <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
          View Location
        </a>
        <h3>Featured Item: {coffeeShop.featuredItems}</h3>
        <h3>Description: {coffeeShop.description}</h3>
        <h3>Rating: {coffeeShop.rating}</h3>
        {/* Make the website a hyperlink */}
        {coffeeShop.website && (
          <h3>
            Website: <a href={coffeeShop.website} target="_blank" rel="noopener noreferrer">{coffeeShop.website}</a>
          </h3>
        )}
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
        <Edit coffeeShop={coffeeShop} handleEdit={handleEdit} />
        <Link to="/coffeeshops">Back</Link>
      </div>
    </>
  );
}