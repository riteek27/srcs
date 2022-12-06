import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Button } from '@mui/material';
import '../css/Navbar.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Admin from '../Admin/Admin';
import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import AboutUs from '../Patient/AboutUs';
import ContactUs from '../Patient/ContactUs';

function NavbarMain() {
    return (
        <div>
            <Router>
                <Navbar bg="dark" variant="dark" className='nav-bar'>
                    <Container>
                        <Navbar.Brand href="#home">Health Care</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link ><Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></Nav.Link>
                            <Nav.Link ><Link to="/aboutus" style={{ textDecoration: 'none', color: 'white' }}>About Us</Link></Nav.Link>
                            <Nav.Link ><Link to="/contactus" style={{ textDecoration: 'none', color: 'white' }}>Contact Us</Link></Nav.Link>
                            <Nav.Link ><Link to="/admin" style={{ textDecoration: 'none', color: 'white' }}>Admin</Link></Nav.Link>
                        </Nav>
                        <Button variant="contained" id='btn'>
                            <Link to="/register" style={{ textDecoration: 'none', color: 'black' }}>SignUp</Link>
                        </Button>
                        <Button variant="contained" id='btn'>
                            <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>Login</Link>
                        </Button>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/aboutus" element={<AboutUs />}></Route>
                    <Route path="/contactus" element={<ContactUs />}></Route>
                    <Route path="/admin" element={<Admin />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>

                </Routes>
            </Router>
        </div>


    );
}

export default NavbarMain;