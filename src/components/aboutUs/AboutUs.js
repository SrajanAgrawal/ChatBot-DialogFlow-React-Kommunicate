import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container , Row , Col , Image , Button} from 'react-bootstrap'

const AboutUs = () => {
  return (
    <div id='about-us'>
        <Container className='pt-8 pt-md-11 bg-gradient-light-white'>
            <Row className='align-items-center justify-content-between mb-8 mb-md-11'>
                <Col className='col-12 col-md-6 order-md-2'>
                    <h1>About Us</h1>
                    Welcome to Pizza hub! We are a family-owned and operated pizza restaurant serving up delicious, handcrafted pizzas made with the freshest ingredients.

                    Our story began. We are passionate about creating the perfect pizza experience for our customers and strive to use only the highest quality ingredients in all of our dishes.

                    In addition to our classic pizza offerings, we also have a variety of Specials Pizzas for our customers to choose from. We are proud to be a part of the community and are dedicated to providing excellent service and delicious food to all of our guests.

                    Thank you for choosing Us. We hope to see you soon!
                    For Ordering Pizza You can Use the ChatBot Support.



 <br/> <br/>
                     <Button>Learn More</Button>
                </Col>
                <Col className='col-12 col-md-6 col-lg-5 order-md-1'>
                    <Image style={{width:590 , opacity: 0.9}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs13t43IMGoeNw3S_xjUj1AFhHu88-VtZHhQ&usqp=CAU"></Image> </Col>
            </Row>
        </Container>
    </div>
  )
}

export default AboutUs