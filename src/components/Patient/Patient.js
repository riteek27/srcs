import React from 'react'
import Footer from '../Footer';
import NavbarPatient from '../Navbars/NavbarPatient';
import Parallax from '../Parallax';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

function PatientHome() {
  return (
    <div>
      <NavbarPatient></NavbarPatient>
      <Parallax></Parallax>
      <hr/>
      <hr/>
      <AboutUs></AboutUs>
      <hr/>
      <hr/>
      <ContactUs></ContactUs>
      <hr/>
      <hr/>
      <Footer></Footer>
    </div>
  )
}

export default PatientHome;
