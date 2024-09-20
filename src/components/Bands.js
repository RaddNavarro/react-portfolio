import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import './Bands.css';
import zutomayo from './asset/img/zutomayo.jpg';
import eve from './asset/img/e-ve.jpg';
import boburnham from './asset/img/bo-burnham (1).jpg';
import eraserheads from './asset/img/eraserheads.jpg';
import yorushika from './asset/img/yorushika.jpg';


export const Bands = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
      return (
        <section className='bands' id="bands">
            <Container>
                <Row>
                    <Col>
                        <div className='bands-bx'>
                            <h2>
                            Hall of my Fav Bands
                            </h2>
                            <p>
                              A display of my fav bands.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className='bands-slider'>
                              <div className='item'>
                                <img src={zutomayo} alt="Image" />
                                <h5>ZUTOMAYO</h5>
                              </div>
                              <div className='item'>
                                <img src={eraserheads} alt="Image" />
                                <h5>Eraserheads</h5>
                              </div>
                              <div className='item'>
                                <img src={boburnham} alt="Image" />
                                <h5>Bo Burnham</h5>
                              </div>
                              <div className='item'>
                                <img src={eve} alt="Image" />
                                <h5>E ve</h5>
                              </div>
                              <div className='item'>
                                <img src={yorushika} alt="Image" />
                                <h5>Yorushika</h5>
                              </div>
    
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )


}
