import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, ButtonToggle, Row,Col,FormGroup,Label,Input
} from 'reactstrap';
import '../../css/scheduleInfo.css'
import img from '../../images/train.jpg'
import Footer from '../Footer'

const ScheduleInfo = (props) => {
  return (
    <div>
      <Card id='info-container'>
        <CardBody id='card-body'>
            <div>
            <CardTitle><h2 id='schedule-head'>From Colombo To Kandy 25/02/2020</h2></CardTitle>
            <CardImg id='sch-img' top width="100%" src={img} alt="Card image cap" />

            </div>
            <div id='info'>
                <CardSubtitle>From : Colombo (06:00:00) <br/> To : Kandy (09:31:00) <br/>Train Name : Udarata Menike <br/> Type : Express
                <br/>First Class : LKR 150.00 <br/> Second Class : LKR 100.00 <br/> Third Class : LKR 50.00
                </CardSubtitle>
                <Row id ='ticket'form>
        {/* <Col md={2}>
          <FormGroup>
            <Label for="exampleCity">First Class</Label>
            <Input type="text" name="city" id="exampleCity"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleState">Second Class</Label>
            <Input type="text" name="state" id="exampleState"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Third Class</Label>
            <Input type="text" name="zip" id="exampleZip"/>
          </FormGroup>  
        </Col> */}
      </Row>
                {/* <h3>Total Price : LKR 650.00</h3>
                <ButtonToggle href='/scheduleinfo' color="success">Book Now</ButtonToggle> */}
                <h2>Succefully Completed!!</h2>
                <br/>First Class : 4<br/> Second Class : 1

            </div>
        </CardBody>
      </Card>
      <Footer/>
    </div>
  );
};

export default ScheduleInfo;
