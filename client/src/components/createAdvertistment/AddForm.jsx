import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../../css/addForm.css'
const AddForm = (props) => {
  return (
    <Form id='container'>
        <h2 id='form-head'>
            Post Advertisement
        </h2>
      <FormGroup row>
        <Col sm={10}>
          <Input type="email" name="email" id="exampleEmail" placeholder="Advertisement Title" />
        </Col>
      </FormGroup>
      <FormGroup row>
       
        <Col sm={10}>
          <Input type="password" name="password" id="examplePassword" placeholder="Price" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={10}>
          <Input type="text" name="select" placeholder="Displayed Contact Number">
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
     
        <Col sm={10}>
          <Input type="textarea" name="text" placeholder="Description" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleFile" sm={2}>Image</Label>
        <Col sm={10}>
          <Input type="file" name="file" id="exampleFile" />
          <FormText >
            <h5>Upload Image for More Attraction...</h5>
          </FormText>
        </Col>
      </FormGroup>
     
      <FormGroup row>
        <Label for="checkbox2" sm={2}></Label>
        <Col sm={{ size: 10 }}>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Check me out
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button color="success">Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
}

export default AddForm;
