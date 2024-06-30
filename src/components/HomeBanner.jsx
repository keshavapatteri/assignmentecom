import Carousel from 'react-bootstrap/Carousel';
import "./HomeBanner.css";

function HomeBanner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src=" https://miro.medium.com/v2/resize:fit:1400/1*SwFB1o_k1LGprN-XRUZQ8w.jpeg" alt="" className='carousel-image' />
        <Carousel.Caption className='carousel-caption'>
          <h3 className='h3' >Mega Sale</h3>
          <p>"Don't miss our Mega Sale event, with huge discounts on all your favorite products for a limited time only!"</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://imageio.forbes.com/specials-images/imageserve/6419b4476af64ebf89bdef19/0x0.jpg?format=jpg&height=600&width=1200&fit=bounds" alt="" className='carousel-image' />
        <Carousel.Caption className='carousel-caption'>
          <h3>Hurry up and place your order now</h3>
          <p> limited stocks are available, so don't miss out on the chance to grab your favorite items!"</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://www.netscribes.com/wp-content/uploads/2024/02/Ecommerce-Technology-Trends-2024.jpg" alt="" className='carousel-image' />
        <Carousel.Caption className='carousel-caption'>
          <h3>"fresh stock available"</h3>
          <p>"Check out our store today for fresh stock available on all the latest products!"   </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeBanner;