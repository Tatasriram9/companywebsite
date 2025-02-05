import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../assets/images/Png logo.png";
import FooterStyle from "../assets/css/Footer.module.css";
import { BsArrowUpSquareFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollTotop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={FooterStyle.footer} id="location">
      <Container fluid>
        <div className={FooterStyle.footertittle}>
          <img
            src={Logo}
            className={FooterStyle.logoimg}
            alt="SRNR IT Solutions Logo"
          /> 
          <h3 className={FooterStyle.foothead}>&nbsp; SRNR IT SOLUTIONS</h3>
        </div>
        <Row className="mx-auto">
          <Col sm={6} md={2}>
            <ul className="list-unstyled lh-lg">
              <li>
                <Link
                  to="/home"
                  className="text-decoration-none text-white"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-decoration-none text-white"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  About{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-decoration-none text-white"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="text-decoration-none text-white"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  FAQ's{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-decoration-none text-white"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-decoration-none text-white"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Blog's
                </Link>
              </li>
            </ul>
          </Col>
          <Col sm={6} md={2}>
            <ul className="list-unstyled" style={{ lineHeight: "2.5" }}>
              <li>
                <Link
                  to="/contactus"
                  className="text-decoration-none text-white "
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Contact Us{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/privacypolicy"
                  className="text-decoration-none text-white"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/termsandconditions"
                  className="text-decoration-none text-white"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <ul className="list-unstyled lh-lg">
              <li>
                <FaLocationDot /> Flat No: 102, Srinilaya Apartments, Opp: SR
                Nagar &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;New Police Station,
                S.R. Nagar, Hyderabad - 500038.
              </li>
              <li>
                {" "}
                <span>
                  <FaPhoneAlt />
                </span>{" "}
                (+91) 949-475-1795{" "}
              </li>
              <li className={FooterStyle.FootMail}>
                <IoMail /> srnritsolutions@gmail.com{" "}
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <ul className={`list-unstyled lh-lg ${FooterStyle.News}`}>
              <li
                className="mb-2 fs-4"
                style={{ color: "#EDAE35", marginTop: "-2rem" }}
              >
                Newsletter
              </li>
              <li>
                We keep watch on how campaigns respond to the biggest challenges
                facing humanity.
              </li>
              <li>
                <Link
                  to="mailto:srnritsolutions@gmail.com"
                  className="btn btn-primary btn-lg"
                >
                  Send E-mail{" "}
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={10} sm={11} md={11}>
            <hr className="border border-white border-1 opacity-100" />
          </Col>
          <Col xs={1} sm={1} md={1}>
            <Link
              to=""
              onClick={(e) => {
                e.preventDefault();
                scrollTotop();
              }}
              className="text-white bg-blue"
            >
              {" "}
              <BsArrowUpSquareFill className="fs-1" />{" "}
            </Link>
          </Col>
        </Row>
        <Row>
          <Col xs={8} sm={9} md={10}>
            <div className="">
              Legal &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;{" "}
              <FaRegCopyright /> Copyrights{" "}
              <span style={{ color: "#4a7ef2" }}>SRNR IT SOLUTIONS</span> All
              Rights Reserved .
            </div>
          </Col>
          <Col xs={3} sm={2} md={2}>
            <Link
              to="https://www.linkedin.com/in/srnr-it-solutions-359855326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app  "
              target="_blank"
              className="text-white fs-5 me-2"
            >
              <GrLinkedin />
            </Link>
            <Link
              to="https://www.instagram.com/srnr_it_solutions/profilecard/?igsh=MWpra2swdGY2Z2NmNw== "
              target="_blank"
              className="text-white fs-5"
            >
              <FaInstagramSquare className='fs-4' />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
