import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../../css/addForm.css'
class AddForm extends React.Component {
  constructor(props){
    super(props);
    this.stat={
      title:'',
      price:'',
      contact:'',
      description:'',
      error:'',
      image:''
    }
  }
  
  onTitleChange=(e)=>{
    const title = e.target.value;
    this.setState(()=>({
      title
    }))
  }

  onPriceChange=(e)=>{
    const price= e.target.value;
    this.setState(()=>({
      price
    }))
  }

  onContactChange = (e)=>{
    const contact = e.target.value;
    this.setState(()=>({
      contact
    }))
  }

  onDescriptionChange= (e)=>{
    const description = e.target.value;
    this.setState(()=>({
      description
    }))
  }

  onImageChange =(e)=>{
    const image = e.target.value;
    console.log(image);
    this.setState(()=>({
      image
    }))
  }
  onSubmit = ()=>{

  }

  render(){
      return (
        <Form id='container'>
            <h2 id='form-head'>
                Post Advertisement
            </h2>
          <FormGroup row>
            <Col sm={10}>
              <Input type="text" name="title" placeholder="Advertisement Title" onChange={this.onTitleChange}/>
            </Col>
          </FormGroup>
          <FormGroup row>
          
            <Col sm={10}>
              <Input type="text" name="price" placeholder="Price" onChange={this.onPriceChange} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={10}>
              <Input type="text" name="select" placeholder="Contact Number" onChnage={this.onContactChange}>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
        
            <Col sm={10}>
              <Input type="textarea" name="text" placeholder="Description" onChange={this.onDescriptionChange}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleFile" sm={2}>Image</Label>
            <Col sm={10}>
              <Input type="file" name="file" id="exampleFile" onChange={this.onImageChange} />
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
              <Button color="danger" onSubmit={this.onSubmit}>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      );
    }
  }

export default AddForm;
