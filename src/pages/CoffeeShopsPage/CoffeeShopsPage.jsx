import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';

export default function CoffeeShopsPage() {
  const [coffeeShop, setCoffeeShop] = useState([]);

  const getCoffeeShop = () => {
    axios.get('http://localhost:3000/coffeeshops')
      .then((response) => setCoffeeShop(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCoffeeShop();
  }, []);

  return (
    <>
    <div>
      <main>
        <Container>
          <Row className="px-4 my-4" >
            <Col sm={7}>
              <Image src="https://e1.pxfuel.com/desktop-wallpaper/250/941/desktop-wallpaper-cozy-coffee-shop-ambience-with-relaxing-jazz-music-rain-sounds-and-crackling-fireplace-cozy-autumn-cafe-window.jpg" fluid rounded />
            </Col>
            <Col sm={5}>
              <h1 className="font-weigh-light">Coffee Shops</h1>
              <p className='mt-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                necessitatibus incidunt ut officiis explicabo inventore.
              </p>
              <Button variant="outline-dark" href='/createCS'>Create Listing</Button>
            </Col>
          </Row>
          <Row>
            <Card className='text-center bg-light my-4 g-4'>
              <Card.Body> dogjotgj kjsrjfsk </Card.Body>
            </Card>
          </Row>
          <Row></Row>

        </Container>

        <h2 style={{}}>Coffee Shop Listings</h2>
        <div className="d-flex flex-row flex-wrap">
          {coffeeShop.map((shop) => {

            return (
              <div className="mr-3 mb-3 flex-grow-1 ">
                <Card style={{ width: '20rem' }} key={shop._id}>
                  <Card.Img variant="top" style={{width: '100%', height: '200px'}} src={shop.image} alt={shop.name} />
                  <Card.Body>
                    <Card.Title>Name: {shop.name}</Card.Title>
                    <Card.Text>
                      {shop.cityState}
                      <br />
                      Rating: {shop.ratings}
                    </Card.Text>
                    <Button variant="outline-dark" href={`/details/${shop._id}`}>
                      Details
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            )

          })}
        </div>
      </main>
      <footer className='py-4 bg-dark text-light text-center'>
        <Container className='px-4'>
          <p> Copyright &copy; 2023 Caffeine Chronicles</p>
        </Container>
        </footer>
    </div>
    </>
  );
}
