import React from "react";
import ContactStyle from "../assets/css/ContactPage.module.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
const ContactPage = () => {
  return (
    <div >
      <div>
            <nav aria-label="breadcrumb " className='ms-4'>
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/home" className="text-decoration-none text-dark">Home / </Link></li>
                <li class="breadcrumb-item active" className='text-primary' aria-current="page">&nbsp; Contact Us</li>
              </ol>
            </nav>
        </div> 
        <div className={ContactStyle.ContactMain}>
        <h1 className="text-center  pt-5">Contact Us </h1>
      <Container>
        <Row className=" d-flex justify-content-center align-items-center">
          <Col md={4} style={{ fontFamily: "Lexend" }}>
            <div>
              <div className="d-flex">
                <h4><MdOutlineLocationOn className="border rounded-circle text-dark bg-white fs-3 me-3" /></h4>
                <h5 style={{ color: "#376AED" }} className="fs-2"> Address</h5>
              </div>
              <p className="ms-5">
                SRNR IT Solutions, Flat No: 102, Srinilaya Apartments, Opp: SR
                Nagar New Police Station, S.R. Nagar, Hyderabad - 500038.
              </p>
            </div>
            <div>
              <div className="d-flex">
                <h4>
                  <LuPhone className="border rounded-circle p-1 me-3 fs-2 text-dark bg-white" />
                </h4>
                <h5 style={{ color: "#376AED" }} className="fs-2" >Let's Connect</h5>
              </div>
              <p className="ms-5">(+91) 949-475-1795</p>
            </div>
            <div>
              <div className="d-flex">
                <h4>
                  <MdOutlineMail className="border rounded-circle p-1 fs-2 me-3  text-dark bg-white" />
                </h4>
                <h5 style={{ color: "#376AED" }} className="fs-2">Email</h5>
              </div>
              <p className="ms-5">info@srnritsolutions.com</p>
            </div>
          </Col>
          <Col md={8} className="d-flex justify-content-center">
            <Form
              style={{
                padding: "40px",
                borderRadius: "15px",
                width: "100%",
                maxWidth: "600px",
              }}
            >
              <Row fluid className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="formName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Your E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Write your message here..."
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Email
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
};

export default ContactPage;
