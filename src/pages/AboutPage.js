import React from "react";
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import Guy from "../assets/images/Exportguy.png";
import Bussiness1 from "../assets/images/business-team 1.png";
import Bussiness from "../assets/images/business1.jpg";
import AboutStyle from "../assets/css/AboutPage.module.css";
import EmpList from "../assets/images/image 1.png";
import { FaArrowRight } from "react-icons/fa";
import Capgemini from "../assets/images/Capgemini.png"
import Aspire from "../assets/images/aspire.png"
import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <div className={AboutStyle.AboutMain}>
        <div>
            <nav aria-label="breadcrumb " className='ms-4'>
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/home" className="text-decoration-none text-dark">Home / </Link></li>
                <li class="breadcrumb-item active" className='text-primary' aria-current="page">&nbsp; About</li>
              </ol>
            </nav>
        </div>
      <Container  className="mt-5 g-4">
        <Row className="">
          <Col sm={12} md={6} lg={4} className="mb-2">
            <Card>
              <Card.Img
                variant="top"
                src={Guy}
                width="350px"
                className="rounded-bottom"
                height="550px"
              />
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3} className="mb-2">
            <Card>
              <Card.Img
                variant="top"
                src={Bussiness1}
                width="314px"
                height="307px"
                className="rounded-bottom"
              />
            </Card>
            <Card className="mt-2 ">
              <Card.Img
                variant="top"
                src={EmpList}
                className="rounded-bottom"
                width="314px"
                height="230px"
              />
            </Card>
          </Col>
          <Col sm={12} md={12} lg={5} className="mt-2" >
            <div
              style={{ position: "relative",textAlign:"justify" }}
              className={AboutStyle.row1col3Text}
            >
              <p>
                Welcome to <strong>SRNR IT Solutions Pvt Ltd </strong>
                where innovation meets passion and also a dynamic Company
                focused on delivering groundbreaking solutions that transform
                industries. Our team of entrepreneurs, technologists, and
                innovators work tirelessly to bring bold ideas to life and we
                embrace agility, adaptability, and a hunger for constant
                improvement.
              </p>
              <p>
                We believe in challenging the status quo, taking risks, and
                pushing the boundaries of what's possible.
              </p>
              <p>
                SRNR IT Solutions began with a vision to disrupt the information
                technology industry. Since then, we have grown from a small
                group of dedicated professionals into a rapidly scaling company.
                Despite our growth, we remain true to our entrepreneurial roots:
                staying fast, flexible and always customer-focused.
              </p>
              <Link className="btn btn-primary" to="/contactus">
                Know More <FaArrowRight />
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6} xs={12} className={`mt-4 ${AboutStyle.row2Col1content}`}>
            <h3 className={AboutStyle.row2clipPath}>
              How we work with clients
            </h3>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <Image src={Bussiness} alt=" " className="img-fluid"></Image>
          </Col>
          <Col md={6}>
            <div className={AboutStyle.row3col2ccontent}>
              <p>
                Increasing customer demands and AI-driven market innovations are
                reshaping industries. Self-optimizing systems are now essential
                for staying ahead.
              </p>
              <p>
                The post-digital revolution continues to gain momentum, making
                the need for rapid business transformation more critical than
                ever.
              </p>
              <p>
                We stand by our clients, wherever they are in their
                transformation journey, working across industries to drive
                meaningful change and create enduring value.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <div className="mt-4" style={{ fontFamily: "Lexend" }}>
            <h2 className="text-center fs-1">Our Core values</h2>
            <p className="text-center">
              Our values shape the culture of our organization and define the
              character of our company expectations.
            </p>
          </div>
          <Col md={5} className="mb-4" style={{ fontFamily: "Lexend" }}>
            <h3>Collaboration</h3>
            <Card style={{ backgroundColor: "#A7DD94" }}>
              <Card.Body>
                <Card.Text>
                Collaboration is the art of uniting efforts for shared goals. By blending ideas, skills, and resources, it fosters open communication and mutual respect, creating a powerful synergy that fuels success and drives innovation forward together.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} className="mb-4" style={{ fontFamily: "Lexend" }}>
            <h3>Transparency</h3>
            <Card style={{ backgroundColor: "#F8B59B" }}>
              <Card.Body>
                <Card.Text>
                Transparency signifies a dedication to openness and honesty in every process. By sharing vital information with stakeholders, it builds trust and enhances accountability, creating a strong foundation for collaboration and fostering deeper relationships.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} className="mb-4" style={{ fontFamily: "Lexend" }}>
            <h3>Trust</h3>
            <Card style={{ backgroundColor: "#FCD07A" }}>
              <Card.Body>
                <Card.Text>
                Trust is the confidence clients and stakeholders have in an organization’s ability to deliver reliable, secure, and high-quality tech solutions. Cultivated over time, it flourishes through consistency, transparency, and the unwavering fulfillment of promises.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} className="mb-4 " style={{fontFamily: "Lexend"}}>
            <h3>Integrity</h3>
            <Card style={{ backgroundColor: "#CCB2EE" }}>
              <Card.Body>
                <Card.Text className="">
                Integrity embodies honesty, ethics, and consistency in actions and decisions, even when unseen. This core value nurtures trust and respect, forming the foundation of strong personal and professional relationships. Embrace integrity for lasting connections!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid >
        <Row>
            <div className={AboutStyle.Collibration}>
             <h1 className="text-white text-center pt-4">Our Collaborators</h1>
              <div className="row d-flex justify-content-center mt-5 g-4 align-items-center">
                  <Image src={Capgemini} alt="" className={`img-fluid col-sm-1 col-md-2 col-lg-2 ${AboutStyle.CollbrationImages} `}   />
                  <Image src={Aspire} alt=" " className={`img-fluid col-sm-1 col-md-2 col-lg-2 ${AboutStyle.CollbrationImages} `}  />
              </div>
            </div>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
