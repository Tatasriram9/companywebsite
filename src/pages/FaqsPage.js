import React,{useState} from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../assets/css/FaqPage.css"

const FaqsPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
      { question: 'What services does your company offers?', answer: 'We provide Technology Consulting, Software Development, Innovative Solutions, IT Support & Maintenance.' },
      { question: 'How many employees does your company have?', answer: 'We have a dynamic team of over 200 employees.' },
      { question: 'Who are the key members of the main management team?', answer: 'Our management team consists of experienced professionals in technology and business leadership.' },
      { question: 'What IT solutions does your company offer?', answer: 'We offer cloud services, cybersecurity solutions, and custom software development.' },
      { question: 'How can I contact SRNR IT Solutions?', answer: 'You can contact us via email at srnritsolutions@gmail.com or call us at +91 9494751795.' },
      { question: 'How can I apply for a job at SRNR IT Solutions?', answer: 'Visit our careers page or send your resume to srnritsolutions@gmail.com.' },
      { question: 'Can we partner with SRNR IT Solutions for a project?', answer: 'Yes, please reach out to us with your project details to discuss further.' },
    ];
    const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  return (
    <div>
        <div>
            <nav aria-label="breadcrumb " className='ms-3'>
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/home" className="text-decoration-none text-dark">Home / </Link></li>
                <li class="breadcrumb-item active" className='text-primary' aria-current="page">&nbsp;  FAQ's</li>
              </ol>
            </nav>
        </div>
       <div className='faqs-container'>
        <Container fluid>
            <Row className="justify-content-center row-transparent">
                <Col md={10} className='col-transparent '>
                        <h1 className="text-center my-4">FAQ's</h1>
                        <Accordion defaultActiveKey={null} flush className='bg-transparent'>
                            {faqs.map((faq, index) => (
                                <Accordion.Item eventKey={index.toString()} key={index} className='bg-transparent accordion-item'>
                                        <Accordion.Header className='accordion-header lh-lg me-3'>
                                                {index + 1}. {faq.question}
                                        </Accordion.Header>
                                    <Accordion.Body className="text-primary accordion-body lh-lg ms-3">{faq.answer}</Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                </Col>
            </Row>
        </Container>
        </div>
    </div>
  )
}

export default FaqsPage
