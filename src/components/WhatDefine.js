import React,{useState,useEffect} from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import Define1 from '../assets/images/Define1.jpeg'
import Define2 from '../assets/images/Define2.jpeg'
import Define3 from '../assets/images/Define3.jpeg'
import HomeStyle from '../assets/css/HomePage.module.css'
import { LuArrowUpRight } from "react-icons/lu";
import { Link } from 'react-router-dom'

const WhatDefine = () => {
    const images=[
        Define1,
        Define2,
        Define3,
    ]
    
    const [currentImage,setCurrentImage]=useState(0)

    useEffect(()=>{
    const interval=setInterval(()=>{
        setCurrentImage((preIndex)=>(preIndex + 1) % images.length);
    },2000)
    return ()=>clearInterval(interval);
    },[])

  return (
    <Row className='align-items-center'>
        <h1 className=" mt-5 ps-5">What defines us?</h1>
        <Col md={6} lg={6} xs={12}  className="mb-4 mb-lg-0 text-center">
        <img
          src={images[currentImage]} 
          alt="Person at a computer"
          className={`rounded img-fluid  w-50 ${HomeStyle.row2img}`}
          style={{height:"85.6vh"}}
        />
        </Col>
        <Col md={6} lg={6} className={HomeStyle.row2para} >
            <div className='py-2'>
                <p className={HomeStyle.row2para}>
                    <span style={{color:"#407BFF",fontWeight:"bold"}}>SRNR IT Solutions Pvt Ltd</span> is one of the Software organization to develop better Software applications, Software development and Software consultancy. Beyond the type and size of your business, our certified and skilled developers are here to help you with solution to your business problems through advanced software solutions.
                </p>
                <p className={HomeStyle.row2para}>
                    Our HR Team is prepared to assist you with competent Candidates for your expanding company. We also provide all HR policies and HR services, which help you identify the best HR solutions tailored to your needs.
                </p>
                <p className={HomeStyle.row2para}>
                    We offer human resources expertise that is aware of business requirements, as well as can offer workforce and resource management in unorganized manufacturing industries in need. We can supply resource management while maintaining our security.
                </p>
                <Link to="/contactus" className=" btn btn-primary col-md-5 col-sm-5" onClick={() => window.scrollTo(0, 0)}> Know More <spaan> <LuArrowUpRight /> </spaan> </Link>
            </div>
        </Col>
    </Row>
  )
}

export default WhatDefine
