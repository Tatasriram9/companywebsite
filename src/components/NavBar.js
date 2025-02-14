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
            <Nav.Link href="mailto:info@srnritsolutions.com"  className={`ms-4 ${NavStyle.headEmail}`}><MdOutlineEmail /> info@srnritsolutions.com</Nav.Link>
          </Col>
          <Col md={2} sm={2} xs={3} className='d-flex justify-content-end' >
            <Link to="https://www.linkedin.com/company/srnr-it-solutions-pvt-ltd/about/?viewAsMember=true " target='_blank' className='text-white fs-5 me-2 '><GrLinkedin  /></Link>
            <Link to="https://www.instagram.com/srnr_it_solutions/profilecard/?igsh=MWpra2swdGY2Z2NmNw== " target='_blank' className='text-white fs-5'><FaInstagramSquare className='fs-4' /></Link>
          </Col>
        </Row>
      </Container>
     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary p-3">
      <Container>
        <Navbar.Brand href="/home"  className={NavStyle.logoBrand}>
          <img
              src={Clogo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          <span  className={`ms-2 ${NavStyle.logoName}`}>SRNR IT SOLUTIONS</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='ms-auto gap-3'>
            <Link to="/home" className={NavStyle.Navmenu}>Home</Link>
            <Link to="/about" className={NavStyle.Navmenu}>About</Link>
            <Link to="/services" className={NavStyle.Navmenu}>Services</Link>
            <Link to="/faqs" className={NavStyle.Navmenu}>FAQ's</Link>
            <Link to="/careers" className={NavStyle.Navmenu}>Careers</Link>
            <Link to="/blogs" className={NavStyle.Navmenu}>Blog's</Link>
            <Link to="/contactus" className=" btn btn-primary ms-5" >Contact Us</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar
