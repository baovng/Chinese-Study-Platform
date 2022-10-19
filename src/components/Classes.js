import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

import './Classes.css';

function Classes() {
  return (
    <>
      <Container className='grid-container'>
      
        <Col className='mb-4'>
            <Link to="/dashboard/course">
                <div className="image"><div>CHIN10123 FAL2022</div></div> 
            </Link>
        </Col>
        <Col className='mb-4'>
            <Link to="/dashboard/course">
                <div className="image"><div>CHIN10123 FAL2022</div></div> 
            </Link>
        </Col>
        <Col className='mb-4'>
            <Link to="/dashboard/course">
                <div className="image"><div>CHIN10123 FAL2022</div></div> 
            </Link>
        </Col>
        <Col className='mb-4'>
            <Link to="/dashboard/course">
                <div className="image"><div>CHIN10123 FAL2022</div></div> 
            </Link>
        </Col>
      
    </Container>
    </>
  )
}

export default Classes
