import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import SoftwareDevelopement from "../assets/images/SoftwareDevelopement.png";
import TechConsulting from "../assets/images/Tech-Consulting.png";
import InnovativeSolutions from "../assets/images/InnovativeSolutions.png";
import ITSupport from "../assets/images/ITSupport.png";
import ServiceStyle from "../assets/css/ServicePage.module.css"
import { Link } from "react-router-dom";
const SerivecesPage = () => {
  return (
    <div>
        <div>
            <nav aria-label="breadcrumb " className='ms-4'>
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/home" className="text-decoration-none text-dark">Home / </Link></li>
                <li class="breadcrumb-item active" className='text-primary' aria-current="page">&nbsp; Services</li>
              </ol>
            </nav>
        </div>
      
      <Container fluid style={{ fontFamily: "Lexend" }}>
        <Row className={`align-items-center justify-content-center mb-2 ${ServiceStyle.serviceRowContent} `} id="softwaredevelopement" >
          <Col
            xs={{ span: 12, order: 1 }}
            sm={{ span: 12, order: 1 }}
            md={{ span: 3, order: 1 }}
          >
            <Image
              src={SoftwareDevelopement}
              alt="Software Devlopement "
              className={`img-fluid mb-2 mt-2  ${ServiceStyle.serviceTechImg} `}
            />
          </Col>
          <Col
            xs={{ span: 12, order: 2 }}
            sm={{ span: 12, order: 2 }}
            md={{ span: 8, order: 2 }}
            className={ServiceStyle.serviceColText}
          >
            <Card className="">
              <Card.Body>
                <Card.Title
                  className={`p-3 ${ServiceStyle.serviceTechCardsTitle} `}
                  style={{
                   
                    color: "#FCD07A",
                  }}
                >
                  SOFTWARE DEVELOPMENT
                </Card.Title>
                <Card.Text className={`text-justify ps-5  ${ServiceStyle.serviceTechCardsText} `}>
                  OUR TEAM OF SKILLED DEVELOPERS CREATES CUSTOM SOFTWARE
                  SOLUTIONS TAILORED TO EACH CLIENTS UNIQUE NEEDS , ENSURING
                  SCALABILITY AND EFFICIENCY
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="align-items-center mb-2 justify-content-center " id="techconsulting" >
          <Col
            xs={{ span: 12, order: 2 }}
            sm={{ span: 12, order: 2 }}
            md={{ span: 8, order: 1 }}
          >
            <Card className="">
              <Card.Body>
                <Card.Title
                  className={`p-3 ${ServiceStyle.serviceTechCardsTitle} `}
                  style={{
                    color: "#A7DD94",
                  }}
                >
                  TECHNOLOGY CONSULTING
                </Card.Title>
                <Card.Text className={`text-justify ps-5  ${ServiceStyle.serviceTechCardsText} `}>
                  WE OFFER EXPERT GUIDANCE TO HELP BUSINESSES NAVIGATE THE
                  EVER-EVOLVING TECHNOLOGICAL LANDSCAPE ,ENSURING THEY STAY
                  AHEAD OF THE CURVE
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            sm={{ span: 12, order: 1 }}
            md={{ span: 3, order: 2 }}
          >
            <Image
              src={TechConsulting}
              alt=" TECHNOLOGY CONSULTINGt "
              className={`img-fluid mb-2 mt-2  ${ServiceStyle.serviceTechImg} `}
            />
          </Col>
        </Row>
        <Row className="align-items-center mb-2 justify-content-center " id="innovativesolutions">
          <Col
            xs={{ span: 12, order: 1 }}
            sm={{ span: 12, order: 1 }}
            md={{ span: 3, order: 1 }}
          >
            <Image
              src={InnovativeSolutions}
              alt="INNOVATIVE SOLUTIONS "
              className={`img-fluid mb-2 mt-2  ${ServiceStyle.serviceTechImg} `}
            />
          </Col>
          <Col
            xs={{ span: 12, order: 2 }}
            sm={{ span: 12, order: 2 }}
            md={{ span: 8, order: 2 }}
          >
            <Card className="">
              <Card.Body>
                <Card.Title
                  className={`p-3 ${ServiceStyle.serviceTechCardsTitle} `}
                  style={{
                   
                    color: "#F8B59B",
                  }}
                >
                  INNOVATIVE SOLUTIONS
                </Card.Title>
                <Card.Text className={`text-justify ps-5  ${ServiceStyle.serviceTechCardsText} `}>
                  WE ARE PASSIONATE ABOUT PUSHING THE BOUNDARIES OF WHAT'S
                  POSSIBLE, AND DEVELOPING, INNOVATIVE PRODUCTS AND SERVICES
                  THAT REDEFINE INDUSTRIES
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="align-items-center mb-2 justify-content-center " id="itsupportmaintenance">
          <Col
            xs={{ span: 12, order: 2 }}
            sm={{ span: 12, order: 2 }}
            md={{ span: 8, order: 1 }}
          >
            <Card className="">
              <Card.Body>
                <Card.Title
                  className={`p-3 ${ServiceStyle.serviceTechCardsTitle} `}
                  style={{
                   
                    color: "#CCB2EE",
                  }}
                >
                  IT SUPPORT & MAINTENANCE
                </Card.Title>
                <Card.Text className={`text-justify ps-5  ${ServiceStyle.serviceTechCardsText} `}>
                  WE PROVIDE RELIABLE AND EFFICIENT IT SUPPORT SERVICES,
                  ENSURING THAT OUR CLIENT'S SYSTEMS RUN SMOOTHLY AND SECURELY
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            sm={{ span: 12, order: 1 }}
            md={{ span: 3, order: 2 }}
          >
            <Image
              src={ITSupport}
              alt="IT SUPPORT & MAINTENANCE"
              className={`img-fluid mb-2 mt-2 ${ServiceStyle.serviceTechImg} `}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SerivecesPage;
