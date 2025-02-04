import React from 'react'
import SStyle from '../assets/css/OurService.module.css'
import { Row ,Col} from 'react-bootstrap'
import Screen from "../assets/images/Icon 1 (1).svg"
import Stock from "../assets/images/icon 2.svg"
import Headset from "../assets/images/icon 4 (1).svg"
import Profile from "../assets/images/icon 3 (1).svg"
import { Link } from 'react-router-dom'
const OurServices = () => {
  return (
    <div className={SStyle.servicemain}>
        <h2 className="mb-5">Our Services</h2>
        <Row className="g-2 justify-content-center">
            <Col  xs={12} sm={6} md={3} lg={3} className="d-flex justify-content-center  ">
                <Link to="/services" style={{textDecoration:"none",color:"white"}} onClick={() => window.scrollTo(0, 0)}>
                    <div className= {SStyle.service}>
                    <img src={Screen} alt=""  />
                    <p className=' fw-bold font-Lexend'>Technology Consulting</p>
                    </div>
                </Link>
            </Col>
            <Col  xs={12} sm={6} md={3} lg={3} className="d-flex justify-content-center  ">
                <Link to="/services" style={{textDecoration:"none",color:"white"}} onClick={() => window.scrollTo(0, 0)}>
                    <div className= {SStyle.service}>
                    <img src={Stock} alt=""  />
                    <p className=' fw-bold font-Lexend'>Software Development</p>
                    </div>
                </Link>
            </Col>
            <Col  xs={12} sm={6} md={3} lg={3} className="d-flex justify-content-center  ">
                <Link to="/services" style={{textDecoration:"none",color:"white"}} onClick={() => window.scrollTo(0, 0)}>
                    <div className= {SStyle.service}>
                    <img src={Profile} alt=""  />
                    <p className=' fw-bold font-Lexend'>Innovative Solutions</p>
                    </div>
                </Link>
            </Col>
            <Col  xs={12} sm={6} md={3} lg={3} className="d-flex justify-content-center  ">
                <Link to="/services" style={{textDecoration:"none",color:"white"}} onClick={() => window.scrollTo(0, 0)}>
                    <div className= {SStyle.service}>
                    <img src={Headset} alt=""  />
                    <p className=' fw-bold font-Lexend'>IT Support & Maintenance</p>
                    </div>
                </Link>
            </Col>
        </Row>
    </div>
  )
}

export default OurServices
