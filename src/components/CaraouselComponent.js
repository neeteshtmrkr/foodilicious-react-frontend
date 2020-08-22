import React,{Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Caraousel extends Component{
    render(){
        return(
            <div className="carousel">
            <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images\1.jpg"
      alt="First slide"
      height="600px"
    />
    <Carousel.Caption >
      <p className="caption-left">We get <br/>What you<br/>want</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/2.jpg"
      alt="Third slide"
      height="600px"
    />

    <Carousel.Caption>
      <p className="caption-left">Fresh <br/>&<br/> Fast Delivery</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/3.jpg"
      alt="Third slide"
      height="600px"
    />

    <Carousel.Caption >
      <p className="caption-right">Fresh Fruits<br/>are also<br/>Delivered</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
        )
    }
}

export default Caraousel;