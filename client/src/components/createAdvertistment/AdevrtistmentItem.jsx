import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col,CardImg} from 'reactstrap';
import '../../css/advertisementItem.css';

const AdvertisementItem = (props) => {
  return (
    <div id='card'>
      <Row>
        <Col sm="6">
          <Card body id = 'add-card'>
            <CardTitle><h3 id = 'card-title'>{props.add.title}</h3></CardTitle>
            <CardImg top width="100%" src={props.add.image} alt="Card image cap" />
            <CardText id='card-description'>{props.add.description}</CardText>
            <CardText><h4 id = 'card-title'>Contact On : {props.add.contactNumber}</h4></CardText>
            <div id='price-btn'>
              <Button color="warning">LKR : {props.add.price}</Button>
              <Button color="success" styles='color:black' >BOOK NOW</Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AdvertisementItem;
