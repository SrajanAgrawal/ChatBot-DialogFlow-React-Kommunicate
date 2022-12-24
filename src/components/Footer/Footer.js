import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container} from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <Container className='footer' fluid>
            <h4 style={{lineHeight: 0.2}}>Made With ♥ by srajan</h4>
            <p>Copyright &copy; 2023-24</p>
        </Container>
    </div>
  )
}

export default Footer