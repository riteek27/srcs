import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { MDBFooter, MDBContainer, MDBBtn } from 'mdb-react-ui-kit';


function Footer() {
  return (
    <div className='Footer'>
      <div className='fixed-bottom'>  
        <MDBFooter className='bg-dark text-centre text-white'>
          <MDBContainer className='p-4 pb-0'>
            <section className='mb-4'>
              <MDBBtn outline color="dark" floating className='s-1' href='#!' role='button'>
                <SocialIcon url="https://facebook.com/in/jaketrent" />
              </MDBBtn>

              <MDBBtn outline color="dark" floating className='s-1' href='#!' role='button'>
                <SocialIcon url="https://twitter.com/in/jaketrent" />
              </MDBBtn>

              <MDBBtn outline color="dark" floating className='s-1' href='#!' role='button'>
                <SocialIcon url="https://google.com/in/jaketrent" />
              </MDBBtn>

              <MDBBtn outline color="dark" floating className='s-1' href='#!' role='button'>
                <SocialIcon url="https://instagram.com/in/jaketrent" />
              </MDBBtn>

              <MDBBtn outline color="dark" floating className='s-1' href='#!' role='button'>
                <SocialIcon url="https://linkedin.com/in/jaketrent" />
              </MDBBtn>

              <MDBBtn outline color="dark" floating className='s-1' role='button'>
                <SocialIcon url="https://discord.com/in/jaketrent" />
              </MDBBtn>
            </section>
          </MDBContainer>

          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2022 Copyright
            <a className='text-light' href='#'>
              CareExpert
            </a>
          </div>
        </MDBFooter>
      </div>
    </div>
  );
}
export default Footer;