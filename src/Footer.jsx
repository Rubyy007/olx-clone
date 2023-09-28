import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted mt-5'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span style={{color:"white"}}>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='www.google.com' className='me-4 text-reset'>
            <span style={{color:"white"}}  className="fa fa-facebook-official"></span>
          </a>
          <a href='' className='me-4 text-reset'>
            
            <i style={{color:"white"}} className="fa fa-twitter-square" aria-hidden="true"></i>
          </a>
          <a  href='' className='me-4 text-reset'>
            
            <i style={{color:"white"}} className="fa fa-google" aria-hidden="true"></i>
          </a>
          <a href='' className='me-4 text-reset'>
            
            <i style={{color:"white"}} className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href='' className='me-4 text-reset'>
          <i style={{color:"white"}} className="fa fa-linkedin" aria-hidden="true"></i>

          </a>
          <a href='' className='me-4 text-reset'>
          <i style={{color:"white"}} className="fa fa-github" aria-hidden="true"></i>

          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5' >
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color:"white"}}>
                <MDBIcon color="white" icon='gem' className='me-3' />
                Company name
              </h6>
              <p style={{color:"white"}}>
                Olx one of the great selling and buying platform in world</p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color:"white"}}>Products</h6>
              <p style={{color:"white"}}>
                <a href='#!' className='text-reset'>
                  laptop
                </a>
              </p>
              <p style={{color:"white"}}>
                <a href='#!' className='text-reset'>
                  cars
                </a>
              </p>
              <p style={{color:"white"}}>
                <a href='#!' className='text-reset'>
                  watches
                </a>
              </p>
              <p style={{color:"white"}}>
                <a href='#!' className='text-reset'>
                  speakers
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color:"white"}}>Useful links</h6>
              <p style={{color:"white"}}>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p style={{color:"white"}}>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p style={{color:"white"}}>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p style={{color:"white"}}>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 style={{color:"white"}} className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p style={{color:"white"}}>
                <MDBIcon color='white' icon='home' className='me-2' />
                    Konalai ,Trichy ,India
              </p >
              <p style={{color:"white"}}>
                <MDBIcon color='white' icon='envelope' className='me-3' />
                batchamanic960@gmail.com
              </p>
              <p style={{color:"white"}}>
                <MDBIcon color='white'  icon='phone' className='me-3' /> + 91 827050 8071
              </p>
            
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)',color:"white" }}>
     © 2021 Copyright :   
        <a  className='text-reset fw-bold' href='https://olx.com/'>
           Olx.com
        </a>
      </div>
    </MDBFooter>
  );
}