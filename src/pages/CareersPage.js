import React from 'react'
import { Container,Image,Row,Col } from 'react-bootstrap'
import ErrorPage from "../assets/images/Error-Page.png"
import { Link } from 'react-router-dom'

const CareersPage = () => {
  return (
    <div >
      <div>
          <nav aria-label="breadcrumb " className='ms-4'>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><Link to="/home" className="text-decoration-none text-dark">Home / </Link></li>
              <li class="breadcrumb-item active" className='text-primary' aria-current="page">&nbsp;  Careers</li>
            </ol>
          </nav>
      </div>
    <Container  fluid className='d-flex' >
      <Row className='justify-content-center align-items-center '>
          <Col md={4} >
              <Image src={ErrorPage} alt='' className='img-fluid' />
          </Col>
      </Row>
    </Container>
  </div>
  )
}

export default CareersPage
