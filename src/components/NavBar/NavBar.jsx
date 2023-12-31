import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/coffeeshops">Caffeine Chronicles</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse >
          <Nav className="me-auto">
            <Nav.Link href="/coffeeshops">Coffee Shops</Nav.Link>
            <Nav.Link href="/createCS">Create A Coffee Shop Listing</Nav.Link>
          </Nav>
          <Navbar.Text>
            Signed in as: <a href="/coffeshops">{user.name}</a>
          </Navbar.Text>
          &nbsp;&nbsp;
          <Nav>
            <Nav.Link href="" onClick={handleLogOut}>Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
