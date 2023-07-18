import React from 'react';
import Slider from 'react-slick';
import { Row, Col } from 'react-bootstrap';
import icon from '../../images/icons/closed-eye.svg';

// You may need to import slick carousel's CSS files here

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1
};

export default function AssetsSlider() {
  return (
    <Slider {...settings}>
      <div>
        <Row>
          <Col sm={12}>
            <div className='border p-4 rounded-4'>
              <h1 className='card-title'>$3,4210.99 <img className='ms-2' width={40} src={icon} alt="" /></h1>
              <p className='card-comment mt-2'>Total Assets Value</p>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          <Col sm={12}>
            <div className='border p-4 rounded-4'>
              <h1 className='card-title'>$1,1210.29 <img className='ms-2' width={40} src={icon} alt="" /></h1>
              <p className='card-comment mt-2'>All Time Profit</p>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          <Col sm={12}>
            <div className='border p-4 rounded-4'>
              <h1 className='card-title'>$1,1210.29 <img className='ms-2' width={40} src={icon} alt="" /></h1>
              <p className='card-comment mt-2'>All Time Profit</p>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          <Col sm={12}>
            <div className='border p-4 rounded-4'>
              <h1 className='card-title'>$1,1210.29 <img className='ms-2' width={40} src={icon} alt="" /></h1>
              <p className='card-comment mt-2'>All Time Profit</p>
            </div>
          </Col>
        </Row>
      </div>
    </Slider>
  );
}
