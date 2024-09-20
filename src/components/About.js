import { Container, Row, Col } from "react-bootstrap"

import './About.css';
import about from "./asset/img/about.png";
import { Star } from "@phosphor-icons/react";


export const About = () => {

    return(
        
        <section className="about" id="about">
       
                    <div className="wrapper">
                        <img className="img_deg2" src = {about} alt="about"></img>
                        
                        <div className="text-bx">
                            <h2>About Me</h2>
                            <p>My name is Radian Ollet Navarro. I am a 3rd Year Computer Science Student from De La Salle Lipa. I am 20 years old and I like playing video games. I would like to learn how to play guitar, not to write my own music but just because I want to play music. I love listening to music, my favorite bands/music artists are ZUTOMAYO, Eraserheads, Bo Burnham, E ve, and Yorushika.</p>
                            
                        </div>
                  
                        
                    </div>
                    
                    
                    
           
        </section>
    )

}