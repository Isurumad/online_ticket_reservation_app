import React from 'react'
import { Col, Row, Button, Form, FormGroup,Input } from 'reactstrap';


class Signin extends React.Component{
    render(){
        return(
            <div id='page-body'>
                <Form id='signup-form'>
                    <h1>USER SIGN IN</h1>
                    <Row form>
                        <Col md={6}>
                        <FormGroup>
                            <Input type="text" name="email" id="email" placeholder="Email"  />
                        </FormGroup>
                        </Col>
                    </Row>

                    <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Input type="password" name="password" id="password" placeholder="Password"/>
                        </FormGroup>
                    </Col>
                    </Row>
                <Button id ='signup-button'>Sign up</Button>
            </Form>
        </div> 
                
        );

    }
}

export default Signin