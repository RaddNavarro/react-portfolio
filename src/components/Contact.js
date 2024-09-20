import { Container } from "react-bootstrap";
import { Col, Row} from "react-bootstrap";
import navIcon1 from "./asset/img/facebook.svg";
import navIcon2 from "./asset/img/instagram.svg";
import navIcon3 from "./asset/img/github.svg";
import './Contact.css';
export const Contact = () => {

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <h2>My Portfolio</h2>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <p className="contactLink">Contact Me @</p>
                            
                            <a href="https://www.facebook.com/radian.navarro.5"><img src={navIcon1} className="img_deg3"></img></a>
                            <a href="https://www.instagram.com/raddd_n/"><img src={navIcon2} className="img_deg4"></img></a>
                            <a href="https://github.com/RaddNavarro"><img src={navIcon3} className="img_deg5"></img></a>
                            <p>raddnavarro@gmail.com</p>
                        </div>
                        <p>Copyright 2024 RaddNavarro. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}