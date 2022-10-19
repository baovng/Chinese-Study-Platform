import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';


function Navbaractive() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container fluid style={{'max-width': '1440px'}}>
      <Navbar.Brand href="/">Chinese Learning Platform</Navbar.Brand>
      <Nav>
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        {/* <Nav.Link href="/lesson">Lessons</Nav.Link> */}
        <Nav.Link href="#logo"><span><i className="fa fa-solid fa-user"></i></span></Nav.Link>
        {/* <NavDropdown title={<span><i class="fa fa-solid fa-user"></i></span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
      </Nav>
    </Container>
  </Navbar>
    </>
    
  )
}

export default Navbaractive
