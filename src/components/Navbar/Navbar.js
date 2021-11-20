import { Navbar, Nav } from "react-bootstrap";
import pig1 from '../imgs/pig1.png'
import { Link } from 'react-router-dom';

const Navibar = () => {
  return (
    <Navbar expand="sm" bg="primary" variant="dark">
      <Navbar.Brand><img src={pig1} alt="" height="30" /> Bank Of React</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/Assignment_4">Home</Nav.Link>
          <Nav.Link as={Link} to="/Assignment_4/userProfile">User Profile</Nav.Link>
          <Nav.Link as={Link} to="/Assignment_4/debits">Debits</Nav.Link>
          <Nav.Link as={Link} to="/Assignment_4/credits">Credit</Nav.Link>
          <Nav.Link as={Link} to="/Assignment_4/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navibar
