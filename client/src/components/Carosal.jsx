import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import '../css/carosal.css';
import Img1 from '../images/carosal_1.jpg'
import Img2 from '../images/carosal_2.jpg'
import Img3 from '../images/carosal_3.jpg'
import Img4 from '../images/carosal_4.jpg'

const items = [
  {  
    id: 1,
    image:Img1,
    altText: 'Heritage Of SRI LANKA',
    caption: 'Heritage Places'
  },
  {
    id: 2,
    image:Img2,
    altText: 'Unawatuna Beach',
    caption: 'Beautiful Beach Around Island'
  },
  {
    id: 3,
    image:Img3,
    altText: 'Dambulla',
    caption: 'Central Province Sri Lanka'
  },
  {
    id: 4,
    image:Img4,
    altText: 'Heigh Quality Trains',
    caption: 'Sri Lanka'
  }
];

const Carosal = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <CarouselCaption className="text-light" captionText={item.caption} captionHeader={item.caption} />
        <img src={item.image}  alt=""/>
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default Carosal;
