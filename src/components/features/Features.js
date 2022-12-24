import React from 'react'
import './Features.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container , Row , Col} from 'react-bootstrap'

const Features = () => {
  return (
    <div >
        <Container style={{marginTop: 45, marginBottom: 60 }}>
        <Row>
            <Col className="colS"><p>🚚</p> <br/><h4 style={{lineHeight: 0}}>24/7 Delivery</h4> <br/> Uttar Area Dhaka, 89345</Col>
            <Col className='colS'><p>😋</p> <br/><h4 style={{lineHeight: 0}}>Tasty Food</h4> <br/> Lorem Ispum under</Col>
            <Col className='colS'><p>👑</p> <br/><h4 style={{lineHeight: 0}}>Quallity Maintain</h4> <br/> Lorem Ispum under</Col>
            <Col className='colS'><p>⏩</p> <br/><h4 style={{lineHeight: 0}}>First Delivery</h4> <br/> Lorem Ispum under</Col>
            <Col className='colS'><p>💲</p>  <br/><h4 style={{lineHeight: 0}}>Low Cost</h4> <br/> Lorem Ispum Cost dolar </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Features

