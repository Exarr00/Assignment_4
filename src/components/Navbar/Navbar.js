import { Navbar, Nav } from "react-bootstrap";
import pig1 from '../imgs/pig1.png'

const Navibar = () => {
    return (
        <Navbar expand="sm" bg="primary" variant="dark">
        <Navbar.Brand><img src={pig1} alt="" height="30"/> Bank Of React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{position:"absolute", right:10}}>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/userProfile">User Profile</Nav.Link>
              <Nav.Link href="/debits">Debits</Nav.Link>
              <Nav.Link href="/credits">Credit</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    )
}

export default Navibar
