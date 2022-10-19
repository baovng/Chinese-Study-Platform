import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';


import Button from 'react-bootstrap/Button';

import HomeNav from '../components/HomeNav';
import Footer from '../components/Footer';

function Signin() {
  
  return (
    <div>
      <HomeNav />
      <MDBContainer fluid >

      <MDBRow className='d-flex justify-content-center align-items-center h-100 mt-5'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

              <Button size='lg' variant="outline-dark">
                Login
              </Button>

              <hr className="my-4" />
                <Button className="mb-2 w-100" size="lg" href="/dashboard" style={{backgroundColor: 'rgb(237, 146, 43)'}}>Signin as Teacher</Button>
                <Button className="mb-4 w-100" size="lg" href="/student/dashboard/course" style={{backgroundColor: 'rgb(237, 146, 43)'}}>Singin As Student</Button>
             

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
      
      <Footer />
    </div>
  )
}

export default Signin