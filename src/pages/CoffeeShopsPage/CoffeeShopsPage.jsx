import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';

export default function CoffeeShopsPage() {
  const [coffeeShop, setCoffeeShop] = useState([]);

  const getCoffeeShop = () => {
    axios.get('https://bamn-coffee-shops.onrender.com/coffeeshops/')
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
                  Welcome to Caffeine Chronicles, the ultimate app for all coffee enthusiasts and cafe connoisseurs! Our platform is dedicated to providing comprehensive reviews and insights about coffee shops from around the world. Whether you're a seasoned coffee aficionado or just beginning your journey into the world of specialty brews, Caffeine Chronicles is your trusted companion for discovering the perfect coffee shop for your unique taste.

                  At Caffeine Chronicles, we understand the importance of a perfect cup of coffee, and our community of passionate reviewers shares their firsthand experiences to guide you on your coffee adventures. From quaint hidden gems to bustling urban hangouts, we've meticulously curated a diverse range of coffee shop profiles to suit every mood and preference.
                </p>
                <Button variant="outline-dark" href='/createCS'>Create Listing</Button>
              </Col>
            </Row>
            <Row>
              <Card className='text-center bg-light my-4 g-4'>
                <Card.Body> Embrace the aroma of each review, as our passionate contributors unravel the true essence of every coffee shop, sip by sip. </Card.Body>
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
                    <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={shop.image} alt={shop.name} />
                    <Card.Body>
                      <Card.Title>Name: {shop.name}</Card.Title>
                      <Card.Text>
                        By: {shop.writer}
                        <br/>
                        {shop.cityState}
                        <br/>
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
