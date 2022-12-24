import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Image} from 'react-bootstrap';

const Crousel = () => {
  return (
    <div className='pt-4 pt-md-11'>
        <Container className="justify-content-md-center">
        <Row>
            <Col className="col-12 col-md-5 col-lg-6 order-md-2">
            {/* <img src="tnw.png" class="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate" alt="..." data-aos="fade-up" data-aos-delay="100"> */}
            <Image style={{width: 660, height: 'auto', border: 0 , opacity:0.8}} src="https://th.bing.com/th/id/OIP.R-AOBfjWUoWDICzZbhiZKgHaFj?w=240&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7" responsive alt="Image" roundedCircle></Image>
           
            </Col>
            <Col className="col-12 col-md-7 col-lg-6 order-md-1" style={{marginTop: 100}}>
                <h1 className="display-3 text-center text-md-start">
                Welcome to <span class="text-primary">Pizza Hub</span>.
                </h1>
                <p className="lead text-center text-md-start text-muted mb-6 mb-lg-8">
                Your food needs to be high-quality, and you need to source it well.
                </p>
                <div className="text-center text-md-start">
                    <a href="overview.html" className="btn btn-primary shadow lift me-1">
                        Download App <i className="fe fe-arrow-right d-none d-md-inline ms-3"></i>
                    </a>
                    <a href="docs/index.html" className="btn btn-primary-soft lift">
                        View Menu
                    </a>
                </div>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Crousel