import React, {useState} from 'react';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function HomeNav() {

  return (
    <Navbar fixed='top' className='fs-5' bg="dark" variant="dark">
      <Container fluid style={{'max-width': '1680px'}}>
      <Navbar.Brand href="/">Chinese Learning Platform</Navbar.Brand>
        <Nav>
          <Nav.Link href="/signin">Login</Nav.Link>
          <Nav.Link href="/createaccount">Create Account</Nav.Link>
        
        </Nav>
      </Container>
    </Navbar>
  )
}

export default HomeNav
