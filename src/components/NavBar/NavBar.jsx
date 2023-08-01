import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
//   return (
//     <nav>
//       <Link to="/coffeeshops">Coffee Shops</Link>
//       &nbsp; | &nbsp;
//       <Link to="/createCS">Create A Coffee Shop Listing</Link>
//     </nav>
//   );
// }

return (
  <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/coffeeshops">Coffee Shops</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/coffeeshops">All Coffee Shops</Nav.Link>
          <Nav.Link href="/createCS">Create A Coffee Shop Listing</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}
