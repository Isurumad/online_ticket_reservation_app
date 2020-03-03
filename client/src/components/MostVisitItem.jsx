import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import '../css/mostVisitItem.css'


const MostVisitItem = (props) => {
  return (
    <div>
      <Card id='mst-card'>
        <CardImg id='card-image' src={props.place.image} alt="Card image cap" />
        <CardBody>
          <CardTitle className='card-title'>{props.place.title}</CardTitle>
          <CardSubtitle className='card-location' >Location : {props.place.location}</CardSubtitle>
          <CardText id='description'>{props.place.description}</CardText>
          <Button color="success">More Info..</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default MostVisitItem;
