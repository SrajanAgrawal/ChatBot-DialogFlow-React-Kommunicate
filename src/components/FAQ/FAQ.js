import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container , Row , Col , Form , Button} from 'react-bootstrap'
import './FAQ.css'

const FAQ = () => {
  return (
    <div className='div'>
        <Container className='main'>
            <h1>Frequently Asked Questions</h1>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

        </Container>
    </div>
  )
}

export default FAQ