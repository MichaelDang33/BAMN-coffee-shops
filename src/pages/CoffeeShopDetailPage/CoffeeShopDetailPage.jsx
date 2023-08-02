import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Edit from '../../components/Edit/Edit';
import {Container, Row, Col, Image, Button} from 'react-bootstrap';


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
      <Container>
    <h1>{coffeeShop.name}</h1>
     <Row className="px-4 my-4">
  <Col sm={10}>
    <Image style={{width: '150%', height:'400px'}} src={coffeeShop.image} alt={coffeeShop.name} fluid rounded />
  </Col>
<br/>
  <Col md={8}>
    <h4>{coffeeShop.description}</h4>
    <h4>Featured Item: {coffeeShop.featuredItems}</h4>
    <h4>Rating: {coffeeShop.rating}</h4>
    <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
      View Location
    </a>
    {coffeeShop.website && (
      <h4>
        Website:{' '}
        <a href={coffeeShop.website} target="_blank" rel="noopener noreferrer">
          {coffeeShop.website}
        </a>
      </h4>
    )}
  <hr/>
    <Edit coffeeShop={coffeeShop} handleEdit={handleEdit} />
  
  </Col>
</Row>
    </Container>

<Row className="mt-3">
  <Col md={{ span: 2, offset: 8 }}>
    <Button variant="dark" onClick={handleDelete}>
      Delete
    </Button>
  </Col>
</Row>

<Row className="mt-3">
  <Col md={{ span: 2, offset: 8 }}>
    <Link class="link-secondary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" to="/coffeeshops">Back</Link>
  </Col> 
</Row>
    </>
  );
}
