import React from 'react';
import { Media,CardImg } from 'reactstrap';
import '../css/mostVisitItem.css'


const MostVisitItem = (props) => {
  return (
    <Media id='card'>
      <Media left href="#">
        <CardImg id='card-image' top src={props.place.image} alt="Card image cap" />
      </Media>
      <Media body id='card-body'>
        <Media heading>
            {props.place.title}
        </Media>
            {props.place.description}
            <a href="http://www.google.lk">  More Info....</a>
      </Media>
    </Media>
  );
};

export default MostVisitItem;
