import { Container, Row, Col } from "react-bootstrap"

import './Home.css';
import profileImg from "./asset/img/profile.png";
import { Star } from "@phosphor-icons/react";


export const Home = () => {

    return(
        
        <section className="home" id="home">
            <Container>
                
                <Row className="align-items-center">
                    <Col xs = {12} md = {6} xl = {7}>
                    
                    <h1>{'Hi! I am Rad'}<span className="wrap"> </span></h1><h2>DLSL Computer Science Student     <Star color="yellow" weight="fill" fill="#e8dd78" className="mainstar"/></h2>
                    <p>I am a 3rd Year Computer Science student from DLSL and here is my portfolio.</p>
                    <button onClick={() => console.log('more about me')}>Learn More about me!</button>
                    <img className="img_deg" src = {profileImg} alt="profileImg"></img>
                    <Star color="yellow" weight="fill" fill="#212a3c" className="star1"/>
                    <Star color="yellow" weight="fill" fill="#212a3c" className="star2"/>
                    <Star color="yellow" weight="fill" fill="#212a3c" className="star3"/>
                    <Star color="yellow" weight="fill" fill="#212a3c" className="star4"/>
                    <Star color="yellow" weight="fill" fill="#212a3c" className="star5"/>
                    <Star color="yellow" weight="fill" fill="#212a3c" className="star6"/>
                    <Star color="yellow" weight="fill" fill="#212a3c" className="star7"/>
                    <Star color="yellow" weight="fill" fill="#212a3c" className="star8"/>
                    <Star color="yellow" weight="fill" fill="#212a3c" className="star9"/>
                    <Star color="yellow" weight="fill" fill="#212a3c" className="star10"/>
                    </Col>
                    
                </Row>
            </Container>
        </section>
    )

}