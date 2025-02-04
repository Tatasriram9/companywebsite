import React from 'react'
import NavStyle from '../assets/css/NavBar.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import  Clogo from "../assets/images/Logo.png"
import {Row, Col } from 'react-bootstrap';
import { GrLinkedin } from "react-icons/gr";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
      <Container fluid className={NavStyle.headNav}>
        <Row xs={9} className='align-items-center '>
          <Col md={10} sm={9} xs={9} className='d-inline-flex'>
            <Nav.Link href="#location" className={NavStyle.headLoc}><FaLocationDot className={NavStyle.locicon}/>Location</Nav.Link>
            <span className={`ms-4 ${NavStyle.headPhone}`}><FaPhoneAlt /> +91 9494751795</span>
            <Nav.Link href="mailto:srnritsolutions@gmail.com"  className={`ms-4 ${NavStyle.headEmail}`}><MdOutlineEmail /> srnritsolutions@gmail.com</Nav.Link>
          </Col>
          <Col md={2} sm={2} xs={3}  >
            <Link to="https://www.linkedin.com/in/srnr-it-solutions-359855326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app  " target='_blank' className='text-white fs-5 me-2 '><GrLinkedin  /></Link>
            <Link to="https://www.instagram.com/srnr_it_solutions/profilecard/?igsh=MWpra2swdGY2Z2NmNw== " target='_blank' className='text-white fs-5'><FaInstagramSquare /></Link>
          </Col>
        </Row>
      </Container>
     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary p-3">
      <Container>
        <Navbar.Brand href="/home"  className={NavStyle.logoBrand}>
          <img
              src={Clogo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          <span  className={`ms-2 ${NavStyle.logoName}`}>SRNR IT SOLUTIONS</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='ms-auto gap-3'>
            <Nav.Link href="/home" className={NavStyle.Navmenu}>Home</Nav.Link>
            <Nav.Link href="/about" className={NavStyle.Navmenu}>About </Nav.Link>
            <Nav.Link href="/services" className={NavStyle.Navmenu}>Services</Nav.Link>
            <Nav.Link href="/faqs" className={NavStyle.Navmenu}>FAQ’s</Nav.Link>
            <Nav.Link href="/careers" className={NavStyle.Navmenu}>Careers </Nav.Link>
            <Nav.Link href="/blogs" className={NavStyle.Navmenu}>Blog's</Nav.Link>
            <Button variant="primary"  className='ms-5'  href="/contactus"> Contact Us</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar
