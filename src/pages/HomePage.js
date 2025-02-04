import React,{useState,useEffect} from 'react'
import HomeStyle from '../assets/css/HomePage.module.css'
import { Container,Row,Col } from 'react-bootstrap'
import Happypeople from '../assets/images/happy-businesspeople.png'
import WhatDefine from '../components/WhatDefine'
import OurServices from '../components/OurServices'
import OurTechonoliges from '../components/OurTechonoliges'
import OurTeam from '../components/OurTeam'
import { Link } from 'react-router-dom'

const HomePage = () => {
    const words = [
        { text:'Innovation',color:'#FFFFFF'},
        { text: 'Creativity', color: '#407bff' },
        { text: 'Collaboration', color: 'yellow' },
        { text: 'Commitment', color: 'violet' },
      ];
    
      const [currentWord, setCurrentWord] = useState(words[0]);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentWord((prevWord) => {
            const currentIndex = words.indexOf(prevWord);
            const nextIndex = (currentIndex + 1) % words.length;
            return words[nextIndex];
          });
        }, 2000); 
        return () => clearInterval(interval);
      }, []);
    

  return (
    <div>
        <Container fluid>
            <Row className={`align-items-center ${HomeStyle.homeRow1}`} >
                <Col  md={6} lg={6}  className="text-center text-lg-start mb-4 mb-lg-0 ps-5 ">
                    <h1 className="display-5 Lexend " >
                        Greatness <span className='fw-semibold' style={{fontFamily:"Lexend"}}>Starts</span> with <br />
                        <span className='fw-semibold' style={{fontFamily:"Lexend"}}>Teamwork  and </span> 
                        <span style={{color:currentWord.color}} className='fw-semibold'>{currentWord.text}</span>
                    </h1>
                    <p className="lead fs-6">"Streamline, manage, and optimize your IT processes effortlessly. 
                        Experience seamless collaboration, real-time monitoring, and innovative solutions — all in one platform".
                    </p>
                    <Link to="/careers" className={`btn bg-white fw-semibold text-primary btn-lg col-md-6 col-sm-12 mt-5 px-2 ${HomeStyle.getStart} `} onClick={() => window.scrollTo(0, 0)}> Get started now </Link>
                </Col>
                <Col md={6} lg={6} className='text-center'>
                    <img src={Happypeople} alt='Happy People' className='img-fluid rounded shadow'  />
                </Col>
            </Row>
            <Row>
              <WhatDefine />
            </Row>
            <Row className='mt-5'>
              <OurServices />
            </Row>
            <Row className='mt-5'>
              <OurTechonoliges  />
            </Row>
              <OurTeam />
        </Container>
    </div>
  )
}

export default HomePage
