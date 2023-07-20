import React, { Component } from 'react'
import Slider from 'react-slick'
import icon from '../../images/icons/closed-eye.svg'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

export default class Resizable extends Component {
  state = {
    display: true,
    width: 600,
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,

    }

    return (
      <div>
        <h2> Resizable Collapsible </h2>
        <button
          className="button"
          onClick={() =>
            this.setState({
              width: this.state.width + 100,
            })
          }
        >
          {' '}
          increase{' '}
        </button>
        <button
          className="button"
          onClick={() =>
            this.setState({
              width: this.state.width - 100,
            })
          }
        >
          {' '}
          decrease{' '}
        </button>
        <button
          className="button"
          onClick={() =>
            this.setState({
              display: !this.state.display,
            })
          }
        >
          {' '}
          toggle{' '}
        </button>
        <div
          style={{
            width: this.state.width + 'px',
            display: this.state.display ? 'block' : 'none',
          }}
        >
          <Slider {...settings}>
          <div className="border p-4 rounded-4 slider-item">
              <h1 className="card-title d-flex align-items-center">
                $3,4210.99 <img className="ms-2" width={40} src={icon} alt="" />
              </h1>
              <p className="card-comment mt-2">Total Assets Value</p>
            </div>
            <div className="border p-4 rounded-4 slider-item ">
              <h1 className="card-title d-flex align-items-center">
                $3,4210.99 <img className="ms-2" width={40} src={icon} alt="" />
              </h1>
              <p className="card-comment mt-2">Total Assets Value</p>
            </div>
            <div className="border p-4 rounded-4 slider-item">
              <h1 className="card-title d-flex align-items-center">
                $3,4210.99 <img className="ms-2" width={40} src={icon} alt="" />
              </h1>
              <p className="card-comment mt-2">Total Assets Value</p>
            </div>
            {/* The rest of your slider items... */}
          </Slider>
        </div>
      </div>
    )
  }
}
